import { Post } from '../models/posts'

export default function BlogPosts({ blogPosts }: { blogPosts: Post[] }): JSX.Element {
  return (
    <div id="blog-posts">
      <h2>Blog</h2>

      {blogPosts.map((post) => (
        <p key={post.title}>
          <h3>{post.title}</h3>
          <h6>Created: {post.created.toISOString()}</h6>
          <h6>Tags: {post.tags}</h6>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </p>
      ))}
    </div>
  )
}
