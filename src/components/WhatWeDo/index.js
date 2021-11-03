import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

function WhatweDO(props) {
  return (
    <Container>
      <InnerConatiner>
        <h2 className="borderLeftRight">{props.title}</h2>
        <Fade left>
          <h4>{props.shortDescrption} </h4>
        </Fade>
      </InnerConatiner>
    </Container>
  )
}

export default WhatweDO

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  @media (max-width: 767px){
    margin-top: 60px;
  }
`

const InnerConatiner = styled.div`
  width: 50%;
  display: flex;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 479px) {
    width: 90%;
  }

  /* h2 {
    font-size: 20px;
    font-weight: 600;
    font-family:"Maven Pro", sans-serif !important;
     
  } */

  h2 {
    padding-top: 0px;
    color: var(--primaryColor);
    font-size: 25px;

    font-weight: 600;
    transition: 1s ease-in-out;
  }

  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  h4 {
    font-size: var(--h4);
    line-height: 50px;
    font-weight: 400;

    @media (max-width: 479px) {
      font-size: 18px;
      letter-spacing: 1.5px;
      line-height: 25px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      letter-spacing: 1.5px;
      line-height: 25px;
    }
    @media (max-width: 991px) {
      font-size: 18px;
      letter-spacing: 1.5px;
      line-height: 25px;
    }
  }
`

