import React from 'react'
import styled from 'styled-components'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
    height: 94vh;
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width: 880px) {
    width: 100%;
  }
`;

const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
    @media only screen and (max-width: 880px) {
    margin: 20px;
    display: flex;
    justify-content: center;
  }
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 880px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 880px) {
    height: 50%;
  }
`;

const Input = styled.input`
    width: 400px;
    padding: 20px;
    @media only screen and (max-width: 880px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
    width: 400px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width: 880px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #0f0bb0;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    @media only screen and (max-width: 880px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 880px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 880px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
    width: 30px;
    margin-right: 20px;
    @media only screen and (max-width: 880px) {
    width: 15px;
  }
`;

const Text = styled.span`
    font-size: 30px;
    @media only screen and (max-width: 880px) {
    font-size: 14px;
  }
`;

const İletisim = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Sorularınız</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Adın soyadın" />
                            <Input placeholder="E-mail adresin" />
                            <Input placeholder="Konu" />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="mesajın" />
                            <Button>Gönder</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src= {Phone} />
                        <Text>+90 111 111 11 11</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src= {Send} />
                        <Text>fobbo@fobbo.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default İletisim
