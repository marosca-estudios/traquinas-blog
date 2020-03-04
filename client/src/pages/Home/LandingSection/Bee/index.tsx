import React from 'react'
// @ts-ignore
import bee from './bee.mp4'
import { BeeContainer } from './styled'

const Bee = () => (
  <BeeContainer autoPlay loop muted>
    <source src={bee}  type="video/mp4" />
  </BeeContainer>
)

export default Bee
