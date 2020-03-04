import styled from 'styled-components'
import theme from 'global/theme'
import { mqMax } from 'utils/mediaQuery'

export const Section = styled.section<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100vh;
  padding: 0 5rem;
  background: ${theme.colors.PRIMARY};
  z-index: ${theme.zIndices.SECTION};
  width: 100%;

  ${mqMax.desktop} {
    padding: 0 1rem;
  }
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

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-height: 100vh;

  ${mqMax.desktop} {
    display: none;
  }
`
