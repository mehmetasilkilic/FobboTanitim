import React from 'react'
import styled from 'styled-components';
import cafe from '../img/cafe.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    @media only screen and (max-width:880px){
        flex-direction: column;
        
    }
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:880px){
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    @media only screen and (max-width:880px){
        width: 100%;
        font-size: 50px;
    }
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width:880px){
        width: 100%;
    }
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width:880px){
        width: 100%;
        flex-direction: column;
    }
`;

const Right = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    @media only screen and (max-width:880px){
        display: none;
    }
`;

const Button = styled.button`
    padding: 15px;
    background-color: #9c1f19;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    letter-spacing: 2px;
    margin-right: 20px;
    @media only screen and (max-width:880px){
        margin-bottom: 20px;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Email = styled.span`
    color: #9c1f19;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Image = styled.img`
    width: 100%;
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>fobbo</Title>
                <Desc>Fobbo açıklama Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
                <Info>
                    <Button>UYGULAMAYI İNDİR</Button>
                    <Contact>
                        <Email>Bize ulaş fobbo@fobbo.com</Email>
                        <ContactText>Her hangi bir soru veya istek için</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right><Image src={cafe} /></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro;


