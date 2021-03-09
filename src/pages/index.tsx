import AboutMe from '../components/about-me'
import BlogPosts from '../components/blog-posts'
import { GetStaticProps } from 'next'
import loadPosts from '../util/load-posts'
import { Post } from '../models/posts'

export default function Home(posts: Record<string, Post[]>): JSX.Element {
  const blogData = posts['blog']
  if (blogData == undefined) throw new Error('No blog posts found')

  return (
    <div>
      <header>
        <h1>
          Welcome to <a href="https://kweave.net/site/">KWEAVE.NET</a>!
        </h1>

        <AboutMe />
      </header>
      <main>
        <BlogPosts blogPosts={blogData} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allPosts = Object.fromEntries(await loadPosts(`${process.cwd()}/posts`))
    return {
      props: allPosts,
    }
  } catch (err) {
    console.error(`Error loading posts: ${err}`)
  }
  throw new Error('Aborted at index.tsx>getStaticProps')
}
