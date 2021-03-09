import { readdir, readFile } from 'fs/promises'
import { Post, Posts } from '../models/posts'

export default async function LoadPosts(postsPath: string): Promise<Posts> {
  const allPosts: Posts = new Map()
  const postsDirs = await readdir(postsPath, { withFileTypes: true })

  postsDirs
    .filter((dirent) => dirent.isDirectory())
    .map((dir) => dir.name)
    .forEach(async (dir) => {
      const subPosts: Post[] = []
      const subdirPath = `${postsPath}/${dir}`
      const subdirFiles = await readdir(subdirPath)

      subdirFiles.forEach(async (file) => {
        const contents = await readFile(`${subdirPath}/${file}`)

        // TODO: front-matter, convert to markdown, sanitize HTML

        subPosts.push({
          title: 'moo',
          created: new Date('1990-01-01'),
          content: contents.toString(),
          tags: 'one, two',
        })
      })

      allPosts.set(dir, subPosts)
    })

  return allPosts
}
