import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman-005.png'

const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px;
`

const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
width: 60%;
font-size: 60px;
` 

const Desc = styled.p`
width: 60%;
font-size: 20px;
margin-top: 20px;
`

const Info = styled.div`
width: 60%;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
`

const Contact = styled.div`
display: flex;
flex-direction: column;
`

const Phone = styled.span`
color: #f0667d;
font-weight: bold;
`

const ContactText = styled.span`
color: gray;
margin-top: 5px;
`

const Right = styled.div`
width: 40%;
`

const Image = styled.img`
margin-top: 50px;
width: 100%;
`

const Intro = () => {
  return (
    <Container>
        <Left><Title>Adventures in a Creative Age</Title>
        <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</Desc>
        <Info>
            <Button>START A PROJECT</Button>
            <Contact>
            <ContactText>Call us at <Phone>(123) 456-7890</Phone></ContactText>
                <ContactText>for any questions or concerns.</ContactText>
            </Contact>
        </Info>
        </Left>
        
        <Right><Image src={Woman}></Image></Right>
    </Container>
  )
}

export default Intro