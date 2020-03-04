const prefix = 'REACT_APP_'

const extractEnvKey = (key: string): string | undefined =>
  process.env[`${prefix}${key}`]

/*
  Ideally we shouldn't expose API keys to the client,
  but it's a bit overkill to build a back-end service
  for this particular functionality.
*/
const baseUri = extractEnvKey('GOOGLE_BLOGGER_BASE_URI')
const blogId = extractEnvKey('GOOGLE_BLOGGER_BLOG_ID')
const apiKey = extractEnvKey('GOOGLE_BLOGGER_API_KEY')

export const endpoint = `${baseUri}${blogId}`
export const suffix = `key=${apiKey}`
