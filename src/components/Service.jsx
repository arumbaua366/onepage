import React, { useState } from "react";
import styled from "styled-components";
import How from "../img/dog-002.jpeg";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  margin-top: 30%;
  width: 90%;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
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
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
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
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
