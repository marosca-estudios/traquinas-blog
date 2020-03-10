import styled from 'styled-components'
import theme from 'global/theme'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 5rem;
  padding: 1rem;
  justify-content: flex-start;
  margin-top: 5rem;

  button {
    margin-right: 1rem;
  }
`

export const Button = styled.button`
  display: flex;
  min-width: 10rem;
  height: 4rem;
  border: none;

  color: ${theme.colors.DARK};
  background: ${theme.colors.PRIMARY_LIGHT};

  cursor: pointer;

  transition: background 0.6s;

  overflow: hidden;
  transform: translate3d(0, 0, 0);

  outline: none;

  border-radius: .5rem;
  opacity: 0.8;

  justify-content: center;

  /* https://codeburst.io/create-a-material-design-ripple-effect-without-js-9d3cbee25b3e */
  :after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
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

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  transition: 0.2s ease all;
`
