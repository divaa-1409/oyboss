import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import{mobile} from "../Responsive"

const Container = styled.div`
  height:60px;
  margin-top: 20px;
  box-shadow: 0px 15px 15px #3b3b3b92;
  margin-bottom: 50px;
  ${mobile({ height:"50px" })}
`;
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  ${mobile({ padding:"10px 0px"})}
`;

/*******************************************   Left Wala   ********************************/
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display:"none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding-left: 5px;
  ${mobile({ marginLeft:"10px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width:"50px" })}
`;


/*******************************************   Center Wala   ********************************/
const Center = styled.div`
  flex:1;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  ${mobile({justifyContent: "flex-end"})}
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  ${mobile({ fontSize:"25px" })}
`;






/*******************************************   Right Wala   ********************************/
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex:2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-right: 25px;
  ${mobile({ paddingRight:"20px"})}
`;


const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{color:"grey", fontSize:16,}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>OyBoss.in</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default navbar