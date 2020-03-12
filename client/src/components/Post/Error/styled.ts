import styled from 'styled-components'
import theme from 'global/theme'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  min-height: 30rem;
  justify-content: center;
  align-items: center;
`

export const ErrorMessage = styled.h2`
  display: flex;
  position: absolute;
  bottom: 0;
  font-size: 2.4rem;
  padding-top: 1rem;
  border-top: 0.1rem solid ${theme.colors.PRIMARY};

  height: 5rem;

  background: ${theme.colors.WHITE};
  z-index: ${theme.zIndices.MINIMAL};
`

export const StyledBee = styled.video`
  position: absolute;
  display: flex;
  width: 100%;
  height: 32rem;
  top: 0;
  margin: 0;
`
