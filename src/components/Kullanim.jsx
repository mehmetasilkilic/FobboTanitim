import React, { useState } from 'react'
import styled from 'styled-components';
import How from '../img/how.png'
import MiniCard from './MiniCard';
import Play from '../img/play.png'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    @media only screen and (max-width:880px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media only screen and (max-width:880px){
        width: 100%;
        height: 100%;
    }
`;

const Image = styled.img`
    display: ${props => props.open && "none"};
    width: 140%;
`;

const Video = styled.video`
    display: ${props => !props.open && "none"};
    height: 500px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    @media only screen and (max-width:880px){
        width: 100%;
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

const Wrapper = styled.div`
    width: 60%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:880px){
        padding: 20px;
    }
`;

const Title = styled.h1``;

const Desc = styled.p`
    
    font-size: 25px;
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
    border-radius: 5px;
    background-color: #0f0bb0;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`;

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0,5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const Kullanim = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 880 ? true : false;

    return (
        <Container>
            <Left>
                <Wrapper>
                    <Title>Nasıl kullanılır</Title>
                    <Desc>Fobbo açıklama Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play} />
                        Nasıl Çalışıyor
                    </Button>
                </Wrapper>
            </Left>
            <Right>
                <Image open={open} src={How} />
                <Video
                    autoPlay
                    controls
                    loop
                    open={open}
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                />
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video
                        autoPlay
                        controls
                        loop
                        open={open}
                        src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                    />
                    <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Kullanim;

