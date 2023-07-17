import styled from 'styled-components'
import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import {sliderItems} from '../HomeData.js';
import {mobile,tablet} from '../Responsive'

const Container = styled.div`
    margin-top: 25px;
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
  ${mobile({ height:"200px" })}
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e7e7e7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`;

const Warpper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
    transition: all 1s ease;
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`;
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    ${tablet({ display:"none" })}
`;
const Image = styled.img`
  height: 100%;
  margin-left: 70px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    text-align: center;
`;
const Title = styled.h1`
    font-size: 70px;
    letter-spacing: 5px;
    ${mobile({fontSize:"20px"})};
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    ${mobile({fontSize:"10px",margin:"10px"})};
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover{
      background-color: black;
      color: white;
      letter-spacing: 2px;
      box-shadow: 0px 10px 10px black;
    }
    ${mobile({fontSize:"15px",paddin:"7px"})};
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
      }
      else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
      }
    };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Warpper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
          <Slide bg={item.bg} key={item.id}>
          <ImgContainer>  
              <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
          </InfoContainer>
          </Slide>
        ))}
        
      </Warpper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
