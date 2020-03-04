import React from 'react'
import { listPostIds, loadSetOfPosts } from 'global/blogger'
import { debounce } from 'throttle-debounce';

import isScrollEnd from 'utils/isScrollEnd'

import config from 'global/config'
import { Post as PostType } from 'data/blogger/types'
import Post from './Post'
import Menu from './Menu'
import { Section, PostsContainer, MenuWrapper } from './styled'

const POST_OFFSET = config.posts.offset

type PostIdPayload = {
  items: Array<{
    id: string,
  }>
}

class InfinitePosts extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      posts: [],
      postIds: [],
      cursor: 0,
    }

    this.handleScroll = debounce(250,this.handleScroll.bind(this));

    this.fetchPostIds = this.fetchPostIds.bind(this);

    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPostIds() {
    listPostIds()
      .then((payload: PostIdPayload) => this.setState({
        postIds: payload.items,
      }))
      .then(() =>
        this.fetchPosts()
      )
  }

  fetchPosts() {
    const { cursor, posts, postIds } = this.state

    loadSetOfPosts(cursor, POST_OFFSET, postIds)
      .then((payload: any) => {
        console.log('payload: ', payload)
        const newPosts = posts.concat(payload)
        this.setState({ posts: newPosts })
      })
      .then(() => {
        this.setState({ cursor: cursor + POST_OFFSET})
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

    this.fetchPostIds()

    // this.fetchPosts()
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

  return (
    <Section ref={ref}>
      {/* <PostsContainer>
        {posts.map((post: PostType, index: number) => <Post post={post} key={index} index={index} />)}
      </PostsContainer> */}
      <InfinitePosts />
      {/* <MenuWrapper>
        <Menu sectionRef={ref} />
      </MenuWrapper> */}
    </Section>
  )
})


export default PostSection
