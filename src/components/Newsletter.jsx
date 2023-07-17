import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../Responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    letter-spacing: 4px;
  ${mobile({ fontSize:"50px" })}
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px;
    ${mobile({ fontSize:"20px" })}
`;
const Inputcontainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
  ${mobile({ width:"70%" })}
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    border: none;
    flex:1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <Inputcontainer>
            <Input placeholder="Your Email" />
            <Button>
                <Send />
            </Button>
        </Inputcontainer>
    </Container>
  );
}

export default Newsletter;
