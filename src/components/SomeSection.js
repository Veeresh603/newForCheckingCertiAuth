import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";

function SomeSection(props) {

  return (
    <Wrapper>
      <div className="somesection">
        <div className="background"></div>
        <div className="text">
          <div className="para">
            <p>
                {props.desc}
            </p>
          </div>
        </div>
        <div className="image">
          <GatsbyImage
            image={props.img}
            className="img"
            style={{
              borderRadius: "5px",
              objectFit: "contain",
              height: "550px",
            }} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SomeSection

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 150px;
  @media (max-width: 479px) {
    margin-top: 80px;

    

    }
  .somesection {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    @media (max-width: 479px) {
      grid-template-rows: auto !important;
      padding-bottom:0px;
    

    }
  }

  .text {
    grid-area: 1/3/2/6;
    display: flex;
    justify-content: center;
    align-items: center;
    height:auto;
    @media (max-width: 479px) {
        grid-area: 2/2/3/11;
        
  
    }
    @media (max-width: 767px) {
        grid-area: 2/2/3/11;
        
  
    }
  }
  .background {
    background-color: #c4c4c4;
    grid-area: 1/1/2/12;
    @media (max-width: 479px) {
       
        grid-area: 2/2/3/11;

    }
    @media (max-width: 767px) {
       
       grid-area: 2/2/3/11;

   }
  }
  .para {
    width: 100%;
    height:auto;
    display: flex;
    border: 2px solid white;
    padding: 10px;
    z-index:1;
    margin: 10px;
  }
  .image {
    grid-area: 1/7/3/12;
    margin-top: -28px;
    @media (max-width: 479px) {
        grid-area: 1/2/2/11;
        padding:0px;

    }
    @media (max-width: 767px) {
        grid-area: 1/2/2/11;
        padding:0px;

    }
  }
  .img{
    @media(max-width:479px){
         height:400px !important;

       }
  }
`
