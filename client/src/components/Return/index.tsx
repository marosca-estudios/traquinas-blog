import React from 'react'
import {
  Wrapper,
  Button,
  NavigationButtons,
} from './styled'
import { RouteComponentProps, withRouter } from 'react-router'

const HomeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
)

const BackIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
)

const ForwardIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
)

type Props = {
  currentPostId: string,
  postIds: Array<{ id: string }>
}

const Return = ({ currentPostId, postIds, history }: Outter) => {
  const postIndex = postIds.findIndex(x => x.id === currentPostId)

  const previousPost: { id: string } = postIds[postIndex - 1]
  const nextPost: { id: string } = postIds[postIndex + 1]

  return (
    <Wrapper>
      <Button onClick={() => history.push('/')}><HomeIcon /> &nbsp; Início</Button>
      <NavigationButtons>
        <Button disabled={!previousPost} onClick={() => history.push(`/post/${previousPost.id}`)}><BackIcon /> &nbsp; Publicação Anterior</Button>
        <Button disabled={!nextPost} onClick={() => history.push(`/post/${nextPost.id}`)}>Publicação Seguinte &nbsp; <ForwardIcon /></Button>
      </NavigationButtons>
    </Wrapper>
  )
}


type Outter = Props & RouteComponentProps<any>;

const Enhanced = withRouter(Return)

export default Enhanced
