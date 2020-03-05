import React from 'react'
import {
  Wrapper,
  LeftRibbon,
  RightRibbon,
  Card,
} from './styled'

type Props = {
  publishedDate: string,
}

const Header = ({ publishedDate }: Props) => {
  const formattedDate = new Date(publishedDate)

  const day = formattedDate.getDay()
  const month = formattedDate.getMonth()
  const year = formattedDate.getFullYear()
  const hour = formattedDate.getHours()
  const minute = formattedDate.getMinutes()

  const finalDate = `${day}/${month}/${year} ${hour}:${minute}`

  return (
    <>
      <Wrapper>
        <LeftRibbon />
        <Card>
          <p>Publicado a {finalDate}</p>
        </Card>
        <RightRibbon />
      </Wrapper>
    </>
  )
}

export default Header
