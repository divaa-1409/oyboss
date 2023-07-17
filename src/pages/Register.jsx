import React from 'react';
import styled from 'styled-components';
import {midLess,mid,mobile} from '../Responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
  ), url("https://oybossimages.noobzfardeen.repl.co/Login - Signup/back.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mid({width:"60%"})};
    ${midLess({width:"70%"})};
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
    width: 60%;
    text-align: center;
    color: teal;
    border-bottom: 1px solid teal;
    margin: auto;
    padding: 10px 0px;
    letter-spacing: 3px;
    ${midLess({fontSize:"30px"})};
    ${mobile({width:"70%"})};
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 20px 0px;
`
const Input = styled.input`
    width: 40%;
    padding: 5px 15px;
    margin: 10px 0px;
    font-size: 15px;
    border: 1px solid teal;
    ${mobile({width:"70%"})};
`
const Agreement = styled.span`
  margin: 20px 0px;
  font-style: 15px;
  text-align: center;
  width: 80%;
`
const Button = styled.button`
    width: 40%;
    padding: 8px 15px;
    font-weight: 600;
    letter-spacing: 2px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper >
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="User Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.</Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
