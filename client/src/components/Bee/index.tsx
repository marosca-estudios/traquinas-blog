import React from 'react'
// @ts-ignore
import bee from './bee.mp4'
import { BeeContainer } from './styled'
import { StyledComponent } from 'styled-components'

const Bee = ({ container }: { container?: StyledComponent<"video", any>}) => {
  const Wrapper = container || BeeContainer

  return (
    <Wrapper autoPlay loop muted>
      <source src={bee}  type="video/mp4" />
    </Wrapper>
  )
}

export default Bee
