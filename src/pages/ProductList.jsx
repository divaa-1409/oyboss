import React from 'react';
import styled from 'styled-components';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import {mobile} from '../Responsive';

const Container = styled.div`
    
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContain= styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${mobile({fontSize:"15px",marginRight:"5px"})};
`;
const Select = styled.select`
  font-size: 15px;
  padding: 10px;
  margin-right: 20px;
  ${mobile({fontSize:"12px",marginRight:"10px"})};
`;
const Option = styled.option`
  font-size: 15px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announce />
      <Navbar />
      <Title>Pens</Title>
      <FilterContain>
        <Filter><FilterText>Filter Products :</FilterText>
        <Select>
          <Option disabled selected>Color</Option>
          <Option>Black Pens</Option>
          <Option>Blue Pens</Option>
          <Option>Yellow Pens</Option>
          <Option>Red Pens</Option>
          <Option>Pink Pens</Option>
        </Select>
        <Select>
          <Option disabled selected>Types</Option>
          <Option>Ballpoint  Pens</Option>
          <Option>Gel Pens</Option>
          <Option>Fountain Pens</Option>
          <Option>Rollerball  Pens</Option>
          <Option>Felt-tip Pens</Option>
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products :</FilterText>
        <Select>
          <Option disabled selected>Category</Option>
          <Option>Premium Pens</Option>
          <Option>Bold Writing Pens</Option>
          <Option>Light Writing Pens</Option>
        </Select>
        </Filter>
      </FilterContain>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
