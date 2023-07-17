import React from 'react';
import styled from 'styled-components';
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons';
import { mobile,midLess } from '../Responsive';

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})};
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px 50px 0px;
`;
const TopBotton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid ${props=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "White"};
    color: ${props=>props.type === "filled" && "White"};
    transition: all 0.3s ease;
    &:hover{
        letter-spacing: 1px;
    }
`;
const TopTexts = styled.div`
    display: flex;
    justify-content: center;
    ${mobile({display:"none"})};
`;
const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 0px;
    `;
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    `;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `;
const Image = styled.img`
    width: 200px;
    `;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    `;
const ProductPack = styled.span``
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;
const ProductAmmountContainer = styled.div`
    display: flex;
    align-items: center;
    `;
const ProductAmmount = styled.span`
    font-size: 24px;
    padding: 5px 12px;
    border: 1px solid teal;
    margin: 10px 10px;
    border-radius: 10px;
    `;
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`;
const Hr = styled.div`
    width: 100%;
    height: 1px;
    margin: 10px 0px;
    background-color: teal;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid teal;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 500;
    ${midLess({fontSize:"25px"})};
`;
const SummaryItem = styled.div`
    letter-spacing: 1px;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "30px"};
    ${midLess({fontSize:"20px"})};
`;
const SummaryItemText = styled.span`
    font-weight: 400;
`;
const SummaryItemPrice = styled.span`
    font-weight: bold;
`;
const Button = styled.button`
    width: 100%;
    letter-spacing: 1px;
    font-size: 20px;
    padding: 8px 18px;
    background-color: black;
    border: none;
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover{
        letter-spacing: 3px;
    }
    ${midLess({fontSize:"15px"})};
`;

const Cart = () => {
  return (
    <Container>
      <Announce />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopBotton>CONTINUE SHOPPING</TopBotton>
            <TopTexts>
                <TopText>Shopping bag (2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopBotton type="filled">CHECK OUT CART</TopBotton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="https://oybossimages.noobzfardeen.repl.co/4.jpg" />
                        <Details>
                            <ProductName><b>Product : </b>Style Notebooks</ProductName>
                            <ProductID><b>ID : </b>987654321</ProductID>
                            <ProductColor color="pink" />
                            <ProductPack><b>Pack of : </b>3 pcs</ProductPack>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmmountContainer>
                            <Remove style={{cursor:"pointer"}} />
                            <ProductAmmount>2</ProductAmmount>
                            <Add style={{cursor:"pointer"}} />
                        </ProductAmmountContainer>
                        <ProductPrice>₹ 200</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://oybossimages.noobzfardeen.repl.co/5.jpg" />
                        <Details>
                            <ProductName><b>Product : </b>Style Pens</ProductName>
                            <ProductID><b>ID : </b>987654321</ProductID>
                            <ProductColor color="black" />
                            <ProductPack><b>Pack of : </b>10 pcs</ProductPack>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmmountContainer>
                            <Remove style={{cursor:"pointer"}} />
                            <ProductAmmount>3</ProductAmmount>
                            <Add style={{cursor:"pointer"}} />
                        </ProductAmmountContainer>
                        <ProductPrice>₹ 300</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>₹ 500</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>₹ 60</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Discount</SummaryItemText>
                    <SummaryItemPrice>₹ -11</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>₹ 549</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
