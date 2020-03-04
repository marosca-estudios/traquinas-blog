import styled, { keyframes, css } from 'styled-components'
import theme from 'global/theme'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  background: ${theme.colors.WHITE};
  color: ${theme.colors.DARK};

  min-height: 55rem;
  top: 50%;
  transform: translate(0, -50%);

  ${(p: { showMenu: boolean }) => p.showMenu && css`
    animation: ${keyframes`
      0% {
        opacity: 0;
      };
      100% {
        opacity: 1;
      };
    `} 0.2s linear;
  `};
`
