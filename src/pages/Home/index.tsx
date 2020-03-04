import React from 'react'
import styled from 'styled-components'

import LandingSection from './LandingSection'
import PostSection from './PostSection'

import scroll from 'utils/scroll'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y:hidden;
  overflow-x:hidden;
`

const Home = () => {
  const postSection = React.useRef(null)

  return (
    <React.Fragment>
      <Container>
        <LandingSection onScroll={() => scroll(postSection)} />
        <PostSection ref={postSection} />
      </Container>
    </React.Fragment>
  )
}

export default Home
