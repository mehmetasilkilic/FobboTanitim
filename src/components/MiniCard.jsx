import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
    width: 150px;
    height: 150px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 3px 3px 26px -3px rgba(0,0,0,0.35); 
    box-shadow: 3px 3px 26px -3px rgba(0,0,0,0.35);
    @media only screen and (max-width:880px){
        width: 20%;
    }
`;

const Image = styled.img`
    width: 20px;
`;

const Text = styled.span`
    margin-top: 10px;
    text-align: center;
    @media only screen and (max-width:880px){
        font-size: 14px;
    }
`;

const MiniCard = () => {
    return (
        <Container>
            <Image src={Search}/>
            <Text>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
        </Container>
    )
}

export default MiniCard
