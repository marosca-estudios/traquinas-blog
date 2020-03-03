export type PostsResponse = {
  kind: string,
  items: Post[],
  etag: string,
}

export type Post = {
  kind: string,
  id: string,
  blog: {
    id: string,
  },
  published: string,
  updated: string,
  url: string,
  selfLink: string,
  title: string,
  content: string,
  author: {
    id: string,
    displayName: string,
    url: string,
    image: {
      url: string,
    },
  },
  replies: {
    totalItems: string,
    selfLink: string,
  },
  etag: string,
}
