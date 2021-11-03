import React from "react"
import styled from "styled-components"

function RightArrow(props) {
  return (
    <Wrapper className="main_right_wrapper">
      <div
        className="arrow_right"
        onClick={() => props.slider?.current?.slickPrev()}
      />
    </Wrapper>
  )
}

export default RightArrow
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  @media (max-width: 479px) {
    width: 40px;
    height: 40px;
  }
  .arrow_right {
    width: 100px;
    height: 100px;
    background-color: transparent;
    transform: rotate(-45deg);
    border-top: 1px solid var(--secondaryColor);
    border-left: 1px solid var(--secondaryColor);
    cursor: pointer;
    transition: all 0.2s ease-in;
    @media (max-width: 479px) {
      width: 40px;
      height: 40px;
    }
  }
  .arrow_right:hover {
    transform: rotate(-45deg) scale(1.1);
  }
`
