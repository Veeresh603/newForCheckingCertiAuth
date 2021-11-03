import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from "styled-components"

function TermsAndConditions(props) {
    return (
        <Wrapper>
            <div className="heading">
               <h2>Terms & Conditions</h2>
            </div>
            <div className="description">
                <ReactMarkdown>
                    {props.data}
                </ReactMarkdown>
            </div>
        </Wrapper>
    )
}

export default TermsAndConditions


const Wrapper = styled.div`
display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-top: 80px;
  .heading{
      grid-area: 1/2/2/11;
      display: flex;
      justify-content: center;
  }
  .description{
      grid-area: 2/2/3/11;
  }
  p{
      text-align: center;
      font-size: 15px;
      font-weight: 400;
  }
  ul{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  li{
    padding: 5px 0;
  }
  h2{
      font-size: 22px;
      font-weight: 600;
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

`