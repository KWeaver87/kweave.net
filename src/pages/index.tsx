import AboutMe from '../components/about-me'
import BlogPosts from '../components/blog-posts'
import { GetStaticProps } from 'next'

interface Posts {
  blog: [
    {
      title: string
      content: string
    }
  ]
}

export default function Home({ blog }: Posts): JSX.Element {
  return (
    <div>
      <header>
        <h1>
          Welcome to <a href="https://kweave.net/site/">KWEAVE.NET</a>!
        </h1>

        <AboutMe />
      </header>
      <main>
        <BlogPosts blogData={blog} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      blog: [
        {
          title: 'Post 1',
          contents: '<p>FirstWords</p>',
        },
        {
          title: 'Post 2',
          contents: '<p>SecondWords</p>',
        },
      ],
    },
  }
}
