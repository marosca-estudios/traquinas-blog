import React from 'react'
import {
  Wrapper,
  LeftRibbon,
  RightRibbon,
  Card,
} from './styled'
import { withRouter, RouteComponentProps } from 'react-router'

type Props = {
  publishedDate: string,
  postId?: string,
}

const PublishedIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
)

function handleClick() {
  // @ts-ignore
  if (this.postId) {
      // @ts-ignore
      this.history.push(`/post/${this.postId}`)
  }
}

const Header = ({ publishedDate, postId, history }: Outter) => {
  const formattedDate = new Date(publishedDate)

  const day = formattedDate.getDay()
  const month = formattedDate.getMonth()
  const year = formattedDate.getFullYear()
  const hour = formattedDate.getHours()
  const minute = formattedDate.getMinutes()

  const finalDate = publishedDate ? `${day}/${month}/${year} ${hour}:${minute}` : ''

  return finalDate
    ? (
        <>
          <Wrapper>
            <LeftRibbon />
            <Card onClick={handleClick.bind({ postId, history })}>
              <PublishedIcon /> &nbsp; <p>Publicado a {finalDate}</p>
            </Card>
            <RightRibbon />
          </Wrapper>
        </>
      )
    : null
}

type Outter = Props & RouteComponentProps<any>;

const Enhanced = withRouter(Header)

export default Enhanced
