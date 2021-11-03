import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown"
 

function BuildAbetterFuture(props) {

  return (
    <Wrapper>
      <div className="buildabetterfuture">
        <div className="image">
        <GatsbyImage
          image={props.img}
          className="img"
          style={{
            borderRadius: "5px",
            objectFit: "contain",
            height: "530px",
            
          }} />
        </div>
        <div className="text">
            <div className="text_section">
            <h2 className="borderLeftRight">{props.title}</h2>
          <p>
           <ReactMarkdown>
             {props.shortDescrption}
           </ReactMarkdown>
          </p>
            </div>
       
        </div>
      </div>
    </Wrapper>
  );
}

export default BuildAbetterFuture

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top:50px;

  .buildabetterfuture {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto 90px;
    grid-auto-flow: column;
    @media(max-width:479px){
        grid-template-rows: 400px 1fr;

       }
  }
  .text {
    grid-area: 1/1/2/8;
    background-color: #c4c4c4;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items:center;
    @media(max-width:479px){
      
        grid-area:2/2/3/11;

       }
  }
  .image{
      grid-area:1/7/3/12;
      margin-top:50px;
      @media(max-width:479px){
        grid-area:1/2/2/11;
        margin-top:0px;
       }
  }
  .img{
    @media(max-width:479px){
         height:400px !important;

       }
  }
  .text_section{
      width:60%;
      @media(max-width:479px){
      
        width:80%;

     }
  }
  /* .gatsby-image-wrapper{
      height:700px;
      object-fit:contain !important;
  } */
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
  h2 {
    width: 100%;

    font-family: var(--family);
    font-weight: 600;
    color: var(--primaryColor);

    font-size: 25px;
    @media (max-width: 479px) {
      font-size: 20px;
      height: auto;
    }
  }
  p{
      font-family: var(--family);
      color:#111111;
      font-weight:400;
      text-align: justify;
  }
`
