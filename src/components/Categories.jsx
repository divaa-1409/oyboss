import React from 'react';
import styled from 'styled-components';
import {categories} from "../HomeData.js"
import CategoryItem from './CategoryItem';
import {mobile} from '../Responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    ${mobile({ padding:"0px"})}
`
const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  );
}

export default Categories;
