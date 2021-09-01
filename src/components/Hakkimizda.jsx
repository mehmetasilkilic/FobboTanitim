import React from 'react'
import styled from 'styled-components'
import Hakkimizdaimg from '../img/hakkimizdaimg.png'

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`

const Left = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    @media only screen and (max-width:880px){
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
    margin-left: 100px;
`;

const Right = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:880px){
        width: 100%;
    }
`;

const Title = styled.span`
    width: 60%;
    font-size: 70px;
`;

const Desc = styled.span`
    width: 60%;
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`;

const Hakkimizda = () => {
    return (
        <Container>
            <Left>
                <Image src={Hakkimizdaimg} />
            </Left>
            <Right>
                <Title>
                    Hakkımızda
                </Title>
                <Desc>Fobbo açıklama Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
            </Right>
        </Container>
    )
}

export default Hakkimizda;
