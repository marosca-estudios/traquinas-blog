import React from 'react'
import scroll from 'utils/scroll'

import LandingSection from './LandingSection'
import PostSection from './PostSection'

import { Container } from '../shared/styled'

const HomePage = () => {
  const postSection = React.useRef(null)

  return (
    <Container>
      <LandingSection onScroll={() => scroll(postSection)} />
      <PostSection ref={postSection} />
    </Container>
  )
}

export default HomePage
