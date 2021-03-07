interface BlogPost {
  title: string
  contents: string
}

export default function BlogPosts({ blogData }: { blogData: BlogPost[] }): JSX.Element {
  return (
    <div id="blog-posts">
      <h2>Blog</h2>

      {blogData.map(({ title, contents }) => (
        <p key={title}>
          <h3>{title}</h3>

          <div dangerouslySetInnerHTML={{ __html: contents }} />
        </p>
      ))}
    </div>
  )
}
