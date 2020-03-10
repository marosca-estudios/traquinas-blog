import React from 'react'
import Header from '../Header'
import {
  PostWrapper,
  Content,
  Title,
  TextWrapper,
  LeftLine,
  RightLine,
} from '../styled'
import { Error as ErrorType } from 'data/blogger/types'
import Bee from 'components/Bee'
import { Wrapper, ErrorMessage, StyledBee } from './styled'

type Props = {
  error?: ErrorType,
}

const getErrorMessage = (code: number): string => {
    switch (code) {
      case 404:
        return "Parece que o post que procurou não se encontra disponível!"
      default:
        return "Erro desconhecido..."
    }
  }

const Error = ({ error }: Props) => {
  const errorMessage = error ? getErrorMessage(error.code) : "Erro desconhecido..."

  return (
    <PostWrapper>
      <Header publishedDate="" />
      <Content>
          <Title>Ups!</Title>
          <TextWrapper>
            <Wrapper>
              <ErrorMessage>{errorMessage}</ErrorMessage>
              <Bee container={StyledBee} />
            </Wrapper>
          </TextWrapper>
        <LeftLine />
        <RightLine />
      </Content>
    </PostWrapper>
  )
}

export default Error;
