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


    const mock = [
      {
      id: '1234',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '2',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '3',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '4',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '5',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '6',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '7',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '8',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '9',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '10',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '12',
      content: 'helloooo',
      title: 'heyheyehye'
    },
    {
      id: '13',
      content: 'helloooo',
      title: 'heyheyehye'
    },
  
    {
      id: '14',
      content: 'helloooo',
      title: 'heyheyehye'
    },    {
      id: '15',
      content: 'helloooo',
      title: 'heyheyehye'
    },
  ]

export const lazyLoad = async (
  cursor: number = 0,
  maxPosts: number = 3,
) => {
  const m = mock

  console.log('cursor, ', cursor, 'maxPosts', maxPosts)
  console.log('data: ', mock)

  console.log(m.slice(cursor, maxPosts))

return Promise.resolve(m).then(m => m.slice(cursor, cursor + maxPosts))

  // console.log('cursor: ', cursor)
  // const postIds = await listPostIds().then(payload =>
  //   payload && payload.items && payload.items.length && payload.items.slice(cursor, maxPosts)
  // )

  // if (!postIds) {
  //   return []
  // }

  // const payload: Promise<Post[]> = Promise.all(postIds.map(async (post: { id: string }) =>
  //   await getPost(post.id)
  // ))

  // return payload
}
