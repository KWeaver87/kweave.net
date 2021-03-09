import { readdir, readFile } from 'fs/promises'
import { Post, Posts } from '../models/posts'
import fm, { FrontMatterResult } from 'front-matter'
import marked from 'marked'

export default async function LoadPosts(postsPath: string): Promise<Posts> {
  const postsDirs = await readdir(postsPath, { withFileTypes: true })

  const allPosts: [string, Post[]][] = await Promise.all(
    postsDirs
      .filter((dirent) => dirent.isDirectory())
      .map(
        async (dir): Promise<[string, Post[]]> => {
          const subdirPath = `${postsPath}/${dir.name}`
          const subdirFiles = await readdir(subdirPath)

          const subPosts = await Promise.all(
            subdirFiles.map(async (fileName) => {
              const rawContents = await readFile(`${subdirPath}/${fileName}`)

              const fmContents: FrontMatterResult<Post> = fm(rawContents.toString())
              // TODO: Stop serializing dates
              const att = fmContents.attributes
              const newPost: Post = {
                title: att.title,
                created: att.created.toString(),
                modified: att.modified?.toString(),
                tags: att.tags,
                content: marked(fmContents.body),
              }

              // TODO: sanitize HTML?
              return newPost
            })
          )

          return [dir.name, subPosts]
        }
      )
  )

  return new Map(allPosts)
}
