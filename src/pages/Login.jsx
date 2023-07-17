import React from 'react';
import styled from 'styled-components';
import {mid,midLess,mobile} from '../Responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
  ), url("https://oybossimages.noobzfardeen.repl.co/Login - Signup/back2.jpg") center;
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
    ${midLess({width:"80%"})};
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
    width: 30%;
    text-align: center;
    color: teal;
    border-bottom: 1px solid teal;
    margin: auto;
    padding: 10px 0px;
    letter-spacing: 3px;
    ${mobile({width:"55%",fontSize:"30px"})};
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;
`
const Input = styled.input`
    width: 40%;
    padding: 5px 15px;
    margin: 10px 0px;
    font-size: 15px;
    border: 1px solid teal;
    ${mobile({width:"60%"})};
`
const Button = styled.button`
    width: 40%;
    margin: 30px 0px;
    padding: 8px 15px;
    font-weight: 600;
    letter-spacing: 2px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Link = styled.a`
  margin: 5px 0px;
  color: teal;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper >
      <Title>LOG IN</Title>
      <Form>
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <Button>SIGN IN</Button>
          <Link>Forget Password</Link>
          <Link>Create an Account</Link>
      </Form>
    </Wrapper>
    </Container>
  );
}

export default Login;
