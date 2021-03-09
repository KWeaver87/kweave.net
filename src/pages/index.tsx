import AboutMe from '../components/about-me'
import BlogPosts from '../components/blog-posts'
import { GetStaticProps } from 'next'
import { Posts } from '../models/posts'
import loadPosts from '../util/load-posts'

export default function Home(posts: Posts): JSX.Element {
  const blogData = posts.get('blog')
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
  return {
    props: loadPosts(`${process.cwd}/posts`),
  }
}
