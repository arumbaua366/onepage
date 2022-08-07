import React from "react";
import styled from "styled-components";
import How from "../img/dog-002.jpeg";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  margin-top: 20%;
  margin-left: 80px;
  width: 70%;
`;

const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
`;

const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={How} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            adipisci consectetur recusandae consequuntur ratione. Facilis,
            laborum modi? Deserunt alias expedita dignissimos, natus et ipsum
            laborum voluptas quaerat quidem laboriosam recusandae.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
