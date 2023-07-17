import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 350px;
    margin: 10px;
    height: 50vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0000009d;
`;
const Title = styled.h1`
    color: white;
    letter-spacing: 2px;
    margin-bottom: 20px;
`;
const Button = styled.button`
    cursor: pointer;
    padding: 12px 18px;
    font-weight: 500;
    transition: all 0.4s ease;
    letter-spacing: 1px;
    &:hover{
      box-shadow: 0px 10px 10px #00000075;
      letter-spacing: 3px;
    }
    
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW!</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
