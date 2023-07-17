import React from 'react';
import styled from 'styled-components';
import {mobile} from '../Responsive'
const Headderr = styled.h1`
  font-size: 70px;
  letter-spacing: 5px;
  width: 100%;
  text-align: center;
  padding: 30px 0px;
  font-weight: 500;
  ${mobile({ fontSize:"40px" })}
`
const HCProduct = () => {
  return (
    <Headderr>Popular Products</Headderr>
  );
}

export default HCProduct;
