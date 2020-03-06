import styled from 'styled-components'
import theme from 'global/theme'
import { mqMax } from 'utils/mediaQuery'

export const PostWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mqMax.desktop} {
    width: 100%;
    padding: 0;
  }
`

/** Content */
export const Title = styled.h1`
  display: flex;
  color: ${theme.colors.DARK};
  font-size: 4rem;
  margin: 5rem 0;
  align-self: center;

  ${mqMax.desktop} {
    margin: 2rem 0;
    font-size: 3.2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: ${theme.colors.WHITE};
  width: 100%;
  position: relative;
  padding-bottom: 5rem;
  color: ${theme.colors.BLACK};

  * {
    img {
      max-width: 100%;
    }
  }
`

export const LeftLine = styled.div`
  position: absolute;
  width: 0.1rem;
  height: 100%;
  background: ${theme.colors.PRIMARY_LIGHT};

  left: 5rem;
  top: 0;

  ${mqMax.desktop} {
    left: 1rem;
  }
`

export const RightLine = styled(LeftLine)`
  left: auto;
  right: 5rem;

  ${mqMax.desktop} {
    left: auto;
    right: 1rem;
  }
`

export const TextWrapper = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;


  ${mqMax.desktop} {
    margin: 2rem;
  }
`
