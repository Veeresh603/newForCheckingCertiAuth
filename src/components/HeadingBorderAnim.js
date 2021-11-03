import React from 'react'
import styled from 'styled-components'

function HeadingBorderAnim(props) {
    return (
        <Wrapper>
           <h2 className="borderLeftRight wow fadeInUp" data-wow-delay={props.delay}>
                {props.children}
           </h2>
        </Wrapper>
    )
}

export default HeadingBorderAnim

const Wrapper = styled.div`
h2 {
    padding-top: 0px;
    font-size: 24px;
    margin: 5px 0;
    transition: 1s ease-in-out;
    font-weight: 600 !important;
    font-size: 22px;

    @media (max-width: 479px){
      font-size: 20px;
    }
  }

  /* .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: default;
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
  } */


`