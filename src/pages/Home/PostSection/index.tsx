import React, { useState, useEffect, lazy, useCallback } from 'react'
import { lazyLoad } from 'global/blogger'

import isScrollEnd from 'utils/isScrollEnd'

import { Post as PostType } from 'data/blogger/types'
import Post from './Post'
import Menu from './Menu'
import { Section, PostsContainer, MenuWrapper } from './styled'

const POST_OFFSET = 3



class InfinitePosts extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      posts: [],
      cursor: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPosts() {
    const { cursor, posts } = this.state

    this.setState({ cursor: cursor + POST_OFFSET})

    lazyLoad(cursor, POST_OFFSET)
      .then((payload: any) => {
        console.log('payload: ', payload)
        const newPosts = posts.concat(payload)
        this.setState({ posts: newPosts })
      })
  }

  handleScroll(event: any) {
    if (!isScrollEnd(event.target.scrollingElement)) {
      return
    }

    this.fetchPosts()
  }

  componentDidMount() {
    // @ts-ignore
    document.addEventListener('scroll', this.handleScroll)

    this.fetchPosts()
  }

  componentWillUnmount() {
    // @ts-ignore
    document.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { posts } = this.state

    return (
      <PostsContainer>
        {posts.map((post: PostType, index: number) => <Post post={post} key={index} index={index} />)}
      </PostsContainer>
    )
  }

}


const PostSection = React.forwardRef((props, ref) => {
  // const [posts, setPosts] = useState<PostType[]>([])
  // const [cursor, setCursor] = useState<number>(0)

  // useEffect(() => {
  //   document.addEventListener('scroll', (event: any) => {
  //     if (isScrollEnd(event.target.scrollingElement)) {
  //       setCursor(cursor + POST_OFFSET)
  //     }
  //   })

  //   return () => {
  //     document.removeEventListener('scroll', (event: any) => {
  //       if (isScrollEnd(event.target.scrollingElement)) {
  //         setCursor(cursor + POST_OFFSET)
  //       }
  //     })
  //   }
  // }, [cursor])

  // useEffect(() => {
  //   lazyLoad(cursor, POST_OFFSET)
  //     .then((payload: PostType[]) => {
  //       const newPosts = posts.concat(payload)
  //       setPosts(newPosts)
  //     })
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cursor, setCursor])

  return (
    <Section ref={ref}>
      {/* <PostsContainer>
        {posts.map((post: PostType, index: number) => <Post post={post} key={index} index={index} />)}
      </PostsContainer> */}
      <InfinitePosts />
      <MenuWrapper>
        <Menu sectionRef={ref} />
      </MenuWrapper>
    </Section>
  )
})


export default PostSection
