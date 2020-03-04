import { endpoint, suffix } from 'global/blogger'
import { PostsResponse, Post } from './types'

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
  const ids =
    postIds &&
    postIds.length &&
    postIds.slice(cursor, cursor + maxPosts)

  if (!ids) {
    return []
  }

  const payload: Promise<Post[]> =
    Promise.all(ids.map(async (post: { id: string }) =>
      await getPost(post.id)
    ))

  return payload
}
