import React from 'react';
import styled from 'styled-components';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import {mid,midLess,mobile} from '../Responsive'

const Container = styled.div`
`
const Wrapper = styled.div`
    display: flex;

`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
`
const Title = styled.h1`
    font-weight: 600;
    letter-spacing: 3px;
    font-size: 40px;
    ${mid({fontSize:"30px"})};
    ${mobile({fontSize:"20px"})};
`
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    ${mid({fontSize:"15px"})};
    ${mobile({fontSize:"12px",margin:"10px 0px"})};
`
const Price = styled.span`
    font-size: 35px;
    letter-spacing: 2px;
    font-weight: 500;
    ${mid({fontSize:"25px"})};
    ${mobile({fontSize:"18px"})};
`
const InfoContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
    ${midLess({padding:"0px 20px"})};
    ${mobile({padding:"0px 5px"})};
`
const FilterContainer = styled.div`
    margin: 50px 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 75%;
    ${midLess({margin:"15px 0px"})};
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const FilterTitle = styled.h3`
    font-weight: 400;
    margin-right: 20px;
    ${mid({fontSize:"15px",marginRight:"5px"})};
`
const FilterColor = styled.div`
    background-color: ${props=>props.color};
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    margin: 0px 5px;
    ${mid({width:"20px",height:"20px",margin:"0px,2px,0px,0px"})};
`;
const FilterPack = styled.select`
    padding: 7px;
    font-size: 15px;
    ${mobile({padding:"3px"})};
`
const FilterOptions  = styled.option`
    font-size: 15px;
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;
    flex-wrap: wrap;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Amount = styled.span`
    padding: 10px 18px;
    border: 1px solid black;
    font-weight: 700;
    border-radius: 10px;
    margin: 0px 10px;
    ${mobile({padding:"8px 15px"})};
`
const Button = styled.button`
    font-weight: 400;
    padding: 10px 18px;
    background-color: white;
    border: 2px solid black;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    &:hover{
        background-color: black;
        color: white;
        transform:scale(1.1);
        box-shadow: 0px 10px 10px black;
    }
    ${midLess({fontSize:"15px"})};
    ${mobile({border:"1px solid black"})};
`
const Product = () => {
  return (
    <Container>
      <Announce/>
      <Navbar/>
      <Wrapper>
        <ImageContainer>
            <Image src="https://oybossimages.noobzfardeen.repl.co/5.jpg" />
        </ImageContainer>
        <InfoContainer>
            <Title>Stylis Pens</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis autem similique eius eaque commodi molestiae dignissimos minus recusandae explicabo.</Desc>
            <Price>₹100</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color :</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                </Filter>
                <Filter>
                    <FilterTitle>Pack of : </FilterTitle>
                    <FilterPack>
                        <FilterOptions selected disabled>Select</FilterOptions>
                        <FilterOptions>10 pcs</FilterOptions>
                        <FilterOptions>20 pcs</FilterOptions>
                        <FilterOptions>40 pcs</FilterOptions>
                        <FilterOptions>80 pcs</FilterOptions>
                    </FilterPack>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove style={{cursor:"pointer"}} />
                    <Amount>1</Amount>
                    <Add style={{cursor:"pointer"}} />
                </AmountContainer>
                <Button>Add to Cart</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
