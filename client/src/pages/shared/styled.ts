import styled from 'styled-components'
import { mqMax } from 'utils/mediaQuery'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 90rem;


  ${mqMax.desktop} {
    width: 100%;
  }
`
