import React from 'react'
import styled, { css } from 'styled-components'
import theme from 'global/theme'
// @ts-ignore
import bee from './bee.mp4'
import { mqMax } from 'utils/mediaQuery'

const Hero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  background: ${theme.colors.WHITE};
  height: 100vh;
  width: 100%;
  position: fixed;

  align-items: center;
  justify-content: center;

  z-index: ${theme.zIndices.NEGATIVE};
`

const centeredAbsolute = css`
  position: absolute;
  height: 100%;

  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  ${centeredAbsolute};

  top: 50%;
`

const WhiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${theme.colors.WHITE};
  height: 100%;
  margin-top: 10rem;


  border-top: 1px solid ${theme.colors.PRIMARY};
`

const Logo = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  margin: 2rem 0;
  color: ${theme.colors.DARK};

  ${mqMax.desktop} {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;

    padding: 1rem;
  }

  ${mqMax.mobile} {
    font-size: 3.4rem;
    margin: 0.5rem 0;
  }
`

const Description = styled.h3`
  font-size: 2.8rem;
  margin: 1rem 0;
  font-weight: 200;
  color: ${theme.colors.DARK};

  ${mqMax.desktop} {
    margin-top: 3rem;
  }

  ${mqMax.mobile} {
    font-size: 2rem;
  }
`

const AbsoluteContainer = styled.div`
  position: fixed;
  display:flex;
  align-self:center;
  justify-content: center;
  height: 100%;
  z-index: ${theme.zIndices.MINIMAL};
`

const Bottom = styled.button`
  margin-top: 3rem;
  font-size: 6rem;
  color: ${theme.colors.GRAY};

  min-width: 5rem;
  min-height: 5rem;

  border: none;
  border-bottom: 2px solid ${theme.colors.DARK};
  border-left: 2px solid ${theme.colors.DARK};
  background: transparent;
  cursor: pointer;

  position: absolute;
  bottom: 5rem;

  &:hover {
    border-bottom: 2px solid ${theme.colors.PRIMARY};
    border-left: 2px solid ${theme.colors.PRIMARY};
  }

  transition: 0.1s ease all;

  transform: rotate(-45deg);

  ${mqMax.desktop} {
    display: none;
  }
`

const BeeContainer = styled.video`
  display: flex;
  position: absolute;
  pointer-events: none;
  z-index: -1;
  width: 65rem;

  ${centeredAbsolute};

  /* ${mqMax.desktop} {
    max-width: 50rem;
    max-height: 100%;
    top: 10%;
  } */
`

export const Bee = () => {

  return (
    <BeeContainer autoPlay loop muted>
      <source src={bee}  type="video/mp4" />
    </BeeContainer>
  )
}

type Props = {
  onScroll: any,
}

const LandingSection = ({ onScroll }: Props) =>  (
  <>
    <Hero>
      <Bee />
      <ContentWrapper>
        <WhiteWrapper>
          <Logo>Traquinas de Vale de Cavalos</Logo>
          <Description>Um blog muito divertido</Description>
        </WhiteWrapper>
      </ContentWrapper>
    </Hero>
    <AbsoluteContainer>
      <Bottom onClick={onScroll} />
    </AbsoluteContainer>
  </>
)

export default LandingSection
