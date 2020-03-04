import React from 'react'
import Bee from './Bee'
import {
  Hero,
  ContentWrapper,
  Content,
  Logo,
  Description,
  AbsoluteContainer,
  ScrollButton,
} from './styled'

type Props = {
  onScroll: any,
}

const LandingSection = ({ onScroll }: Props) => (
  <>
    <Hero>
      <Bee />
      <ContentWrapper>
        <Content>
          <Logo>Traquinas de Vale de Cavalos</Logo>
          <Description>Um blog muito divertido</Description>
        </Content>
      </ContentWrapper>
    </Hero>
    <AbsoluteContainer>
      <ScrollButton onClick={onScroll} />
    </AbsoluteContainer>
  </>
)

export default LandingSection
