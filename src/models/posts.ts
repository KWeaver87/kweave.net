export interface Post {
  title: string
  created: string
  modified?: string
  tags: string
  content: string
}

export type Posts = Map<string, Post[]>
