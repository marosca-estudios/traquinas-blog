import React, { useEffect } from 'react'

import InfinteScroll from 'components/InfiniteScroll'

import { listPostIds, loadSetOfPosts } from 'data/blogger/services'

import Post from 'components/Post'
import Menu from './Menu'
import { Section, MenuWrapper } from './styled'
import { PostsContainer } from 'pages/shared/styled'

type PostIdPayload = {
  items: Array<{
    id: string,
  }>
}

const Posts = ({ data }: any) => <PostsContainer>{data.map((x: any, i: any) => <Post post={x} key={i} />)}</PostsContainer>

const PostSection = React.forwardRef((props, ref) => {

  return (
    <Section ref={ref}>

      <InfinteScroll fetchIds={listPostIds} fetchPartialData={loadSetOfPosts}>
        <Posts />
      </InfinteScroll>
      {/* <PostsContainer>
        {posts.map((post: PostType, index: number) => <Post post={post} key={index} index={index} />)}
      </PostsContainer> */}
      {/* <MenuWrapper>
        <Menu sectionRef={ref} />
      </MenuWrapper> */}
    </Section>
  )
})


export default PostSection
