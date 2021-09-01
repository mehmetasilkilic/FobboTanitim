import React from 'react'
import styled from 'styled-components';
import App from '../img/app.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media only screen and (max-width: 880px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 880px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 68%;
  margin-left: 100px;
  margin-top: 20px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 880px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 880px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  padding: 15px 20px;
  background-color: #0f0bb0;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const Uygulama = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>fobbo</b> slogan
          <br />
          <b>fobbo</b> slogan
        </Title>
        <SubTitle>
          Fobbo slogan 2
        </SubTitle>
        <Desc>Fobbo açıklama Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
        <Button>Daha Fazlası</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Uygulama
