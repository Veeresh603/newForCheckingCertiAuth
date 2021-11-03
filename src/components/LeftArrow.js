import React from "react"
import styled from "styled-components"

function LeftArrow(props) {
  return (
    <Wrapper className="main_left_wrapper">
      <div
        className="arrow_left"
        onClick={() => props.slider?.current?.slickNext()}
      ></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  @media (max-width: 479px) {
    display: block;
  }
  .arrow_left {
    width: 100px;
    height: 100px;
    background-color: transparent;
    transform: rotate(-45deg);
    border-right: 1px solid var(--secondaryColor);
    border-bottom: 1px solid var(--secondaryColor);
    cursor: pointer;
    transition: all 0.2s ease-in;

    @media (max-width: 479px) {
      width: 40px;
      height: 40px;
    }
  }
  .arrow_left:hover {
    transform: rotate(-45deg) scale(1.1);
  }
`
export default LeftArrow
