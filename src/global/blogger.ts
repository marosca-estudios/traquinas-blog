import {
  PostsResponse,
  Post,
} from 'data/blogger/types'

const prefix = 'REACT_APP_'

const extractEnvKey = (key: string): string | undefined =>
  process.env[`${prefix}${key}`]


/*
  Ideally should be a node.js back-end handling this
  but it's overkill for this project in particular
  so it's ok to expose the api keys
*/
const baseUri = extractEnvKey('GOOGLE_BLOGGER_BASE_URI')
const blogId = extractEnvKey('GOOGLE_BLOGGER_BLOG_ID')
const apiKey = extractEnvKey('GOOGLE_BLOGGER_API_KEY')

const endpoint = `${baseUri}${blogId}`
const suffix = `key=${apiKey}`

/** Loads all posts including their content */
export const listPosts = async (): Promise<PostsResponse> =>
  await fetch(`${endpoint}/posts?${suffix}`)
    .then(response => response.json())

/** Fetches all the post ids only */
export const listPostIds = async (): Promise<PostsResponse> =>
  await fetch(`${endpoint}/posts?fields=kind,items(id)&${suffix}`)
    .then(response => response.json())

/** Fetch a specific post by its id */
export const getPost = async (postId: string): Promise<Post> =>
  await fetch(`${endpoint}/posts/${postId}/?${suffix}`)
    .then(response => response.json())

export const loadSetOfPosts = async (
  cursor: number = 0,
  maxPosts: number = 3,
  postIds: Array<any>,
): Promise<Post[]> => {
  const ids = postIds.slice(cursor, cursor + maxPosts)

  if (!ids) {
    return []
  }

  const payload: Promise<Post[]> = Promise.all(ids.map(async (post: { id: string }) =>
    await getPost(post.id)
  ))

  return payload
}
