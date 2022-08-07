import React from 'react'
import styled from 'styled-components'
import App from '../img/app-003.png'

const Container = styled.div`
display: flex;
`

const Left = styled.div`
width: 50%;
`

const Image = styled.img`
width: 90%
`

const Right = styled.div`
width: 50%;
`

const Title = styled.span``
const SubTitle = styled.span``
const Desc = styled.p``
const Button = styled.button``


const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
        </Left>
      <Right>
        <Title></Title>
        <SubTitle></SubTitle>
        <Desc></Desc>
        <Button></Button>
      </Right>
    </Container>
  )
}

export default Feature