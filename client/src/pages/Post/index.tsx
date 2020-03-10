import React, { useState, useEffect } from 'react'
import { Container, Center, PostsContainer } from '../shared/styled'
import Post from 'components/Post'
import Spinner from 'components/Spinner'
import Return from 'components/Return'
import { Post as TPost } from 'data/blogger/types'
import { getPost } from 'data/blogger/services'

const PostPage = () => {
  const [post, setPost] = useState<TPost>()

  useEffect(() => {
    const url: string = window.location.pathname
    const id: string = url.substring(url.lastIndexOf('/') + 1)

    if (id) {
      Promise.resolve(getPost(id))
        .then((payload) => setPost(payload))
    }
  }, [])

  return !post
    ? <Spinner />
    : (
      <Container>
        <Center>
          <PostsContainer>
            <Return />
            <Post post={post} />
          </PostsContainer>
        </Center>
      </Container>
    )
}

export default PostPage
