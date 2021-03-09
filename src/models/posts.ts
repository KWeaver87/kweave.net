export interface Post {
  title: string
  created: Date
  modified?: Date
  tags: string
  content: string
}

export type Posts = Map<string, Post[]>
