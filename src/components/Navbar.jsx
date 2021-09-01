import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: #9c1f19; 
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media only screen and (max-width:880px){
        display: none;
    }
`;

const MenuItem = styled.li`
    padding: 0 15px;
    font-size: 20px;
    font-weight: bold;
    line-height: 34px;
    color: gray;
    cursor: pointer;
    border-bottom: 4px solid transparent;
    &:hover {
        border-bottom: 4px solid #9c1f19;
        }
`;

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: #9c1f19;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>fobbo</Logo>
                    <Menu>
                        <MenuItem>Keşfet</MenuItem>
                        <MenuItem>Uygulama</MenuItem>
                        <MenuItem>Kullanlım</MenuItem>
                        <MenuItem>Hakkımızda</MenuItem>
                        <MenuItem>İletişim</MenuItem>
                    </Menu>
                    </Left>
                    <Button>UYGULAMAYI İNDİR</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
