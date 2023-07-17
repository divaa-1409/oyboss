import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {tablet,mobile} from '../Responsive'

const Container = styled.div`
    display: flex;
    border-top: 2px solid teal;
    justify-content: space-between;
    flex-wrap: wrap;
    ${tablet({justifyContent:"center"})};
`;
const Left = styled.div`
    width:450px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top:20px;
    ${tablet({width:"350px"})};
    ${mobile({width:"100vw"})};
`;
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const Socials = styled.div`
    display: flex;
`
const SocialIcons = styled.div`
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props)=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    width:450px;
    padding: 20px;
    margin-top:20px;
    ${tablet({width:"350px"})};
    ${mobile({width:"100vw"})};
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`;
const Right = styled.div`
    width:450px;
    padding: 20px;
    margin-top:20px;
    ${tablet({width:"350px"})};
    ${mobile({width:"100vw"})};
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 300px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>OyBoss.in</Logo>
        <Desc>
            There are many variations of passages of stationary products available, but the majority hav suffered alteration in some form, by injected humour, or randomised words which don't look even slighlty believable.
        </Desc>
        <Socials>
            <SocialIcons color="3B5999">
                <Facebook />
            </SocialIcons>
            <SocialIcons color="E4405f">
                <Instagram />
            </SocialIcons>
            <SocialIcons color="55ACEE">
                <Twitter />
            </SocialIcons>
            <SocialIcons color="E60023">
                <YouTube />
            </SocialIcons>
        </Socials>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Populars</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: "10px"}} /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, eos.</ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}} /> +91 987654321</ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}} /> contact@oyboss.in</ContactItem>
        <Payment src="https://oybossimages.noobzfardeen.repl.co/payment.png"/>
      </Right>
    </Container>
  );
}

export default Footer;
