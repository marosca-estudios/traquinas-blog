import React from 'react'
import { Post as PostType } from 'data/blogger/types'
import Header from './Header'
import Error from './Error'
import {
  PostWrapper,
  Content,
  Title,
  TextWrapper,
  LeftLine,
  RightLine,
} from './styled'

type Props = {
  post: PostType,
}

const hasError = (post: any): boolean => Boolean(!post || post.error)

const Post = ({ post }: Props) => hasError(post)
  ? <Error error={post.error} />
  : (
    <PostWrapper>
      <Header publishedDate={post.published} />
      <Content>
        <Title>{post.title}</Title>
        <TextWrapper>
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </TextWrapper>
        <LeftLine />
        <RightLine />
      </Content>
    </PostWrapper>
  )

export default Post;
