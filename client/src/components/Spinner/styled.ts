import styled, { keyframes } from 'styled-components'
import theme from 'global/theme'

const rotate = keyframes`
  100%: {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0%: {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -3.5rem;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -12.4rem;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
`

export const Loader = styled.div`
  width: 5rem,;
  height: 5rem;
  margin: 0 auto;
`

export const Circular = styled.svg`
  animation: ${rotate} 2s linear infinite;
  height: 100%;
  width: 100%;
  transform-origin: center center;
`

export const Path = styled.circle`
  stroke: ${theme.colors.WHITE};
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
`
