import { ShoppingCartOutlined,FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../Responsive'
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  z-index: 3;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
`;
const Container = styled.div`
    margin: 5px;
    min-width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    position: relative;
    transition: all 0.3s ease;
  ${mobile({ height:"300px",minWidth:"300px" })}
    &:hover ${Info}{
      opacity: 1;
    }
    &:hover{
      transform: scale(1.1);
    }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover{
    background-color: #ccf3f3;
    transform: scale(1.1);
  }
`;
const product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default product;
