import React from 'react'
import { Post as PostType } from 'data/blogger/types'
import Header from './Header'
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
  index: number,
}

const Post = ({ post, index}: Props) => (
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
