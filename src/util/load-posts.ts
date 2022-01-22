import { readdir, readFile } from 'fs/promises'
import { Post, Posts, SerializedPost } from '../models/posts'
import fm, { FrontMatterResult } from 'front-matter'
import { marked } from 'marked'
import { dateToIsoDay } from './helpers'

export default async function LoadPosts(postsPath: string): Promise<Posts> {
  const postsDirs = await readdir(postsPath, { withFileTypes: true })

  const allPosts: [string, Post[]][] = await Promise.all(
    postsDirs
      .filter((dirent) => dirent.isDirectory())
      .map(async (dir): Promise<[string, Post[]]> => {
        const subdirPath = `${postsPath}/${dir.name}`
        const subdirFiles = await readdir(subdirPath)

        const subPosts = await Promise.all(
          subdirFiles.map(async (fileName) => {
            const rawContents = await readFile(`${subdirPath}/${fileName}`)

            const fmContents: FrontMatterResult<SerializedPost> = fm(rawContents.toString())
            const att = fmContents.attributes
            const newPost: Post = {
              title: att.title,
              createdStr: dateToIsoDay(att.created),
              modifiedStr: dateToIsoDay(att.modified),
              tags: att.tags,
              content: marked.parse(fmContents.body),
            }

            // TODO: sanitize HTML?
            return newPost
          })
        )

        return [dir.name, subPosts]
      })
  )

  return new Map(allPosts)
}
