export interface Post {
  title: string
  createdStr: string
  modifiedStr?: string
  tags: string
  content: string
}

export interface SerializedPost extends Post {
  created: Date
  modified?: Date
}

export type Posts = Map<string, Post[]>
