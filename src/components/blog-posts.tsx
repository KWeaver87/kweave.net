import { Post } from '../models/posts'
import { toKebabCase } from '../util/helpers'
import styles from './blog-posts.module.scss'

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
          <ul className={styles.postMetadata}>
            <li>Created: {post.createdStr}</li>
            {post.modifiedStr ? <li>Modified: {post.modifiedStr}</li> : ''}
            <li>Tags: {post.tags}</li>
          </ul>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      ))}
    </div>
  )
}
