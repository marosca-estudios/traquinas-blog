import styled from 'styled-components'
import theme from 'global/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 2rem;
`

export const Card = styled.div`
  display: flex;
  min-width: 5rem;
  min-height: 3.5rem;

  align-items: center;
  padding: 0 2rem;
  color: ${theme.colors.BLACK};
  background: ${theme.colors.PRIMARY_LIGHT};

  &:hover {
    p {
      text-decoration: underline;
    }
  }

  cursor: pointer;

  transition: background 0.6s;

  overflow: hidden;
  transform: translate3d(0, 0, 0);

  :after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 12.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  :active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }

  transition: 0.2s ease all;
`

export const LeftRibbon = styled.div`
	width: 0;
	height: 0;
	border-top: 25px solid ${theme.colors.PRIMARY_LIGHT};
	border-left: 25px solid transparent;
	border-bottom: 25px solid ${theme.colors.PRIMARY_LIGHT};
`

export const RightRibbon = styled.div`
	width: 0;
	height: 0;
	border-top: 25px solid ${theme.colors.PRIMARY_LIGHT};
	border-right: 25px solid transparent;
	border-bottom: 25px solid ${theme.colors.PRIMARY_LIGHT};
`
