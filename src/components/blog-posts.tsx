import { Post } from '../models/posts'
import { toKebabCase } from '../util/helpers'

export default function BlogPosts({ blogPosts }: { blogPosts: Post[] }): JSX.Element {
  blogPosts.sort((a, b) => b.createdStr.localeCompare(a.createdStr))
  return (
    <div id="blog-posts">
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.title}>
            <a href={`#${toKebabCase(post.title)}`}>{post.title}</a>
          </li>
        ))}
      </ul>

      {blogPosts.map((post) => (
        <article key={post.title} id={toKebabCase(post.title)}>
          <h2>{post.title}</h2>
          <h6>Created: {post.createdStr}</h6>
          <h6>Tags: {post.tags}</h6>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      ))}
    </div>
  )
}
