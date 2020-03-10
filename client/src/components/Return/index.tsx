import React from 'react'
import {
  Wrapper, Button,
} from './styled'

const HomeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
)

const BackIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
)

const Return = () => {

  return (
    <Wrapper>
      <Button onClick={() => window.location.replace('/')}><HomeIcon /> &nbsp; Início</Button>
      <Button onClick={() => window.history.back()}><BackIcon /> &nbsp; Voltar</Button>
    </Wrapper>
  )
}

export default Return
