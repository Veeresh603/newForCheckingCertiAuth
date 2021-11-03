import React from "react"
import styled from "styled-components"
import number from "../../images/whycertisured/number circle.svg"

function WhyCertisured13() {
  return (
    <Wrapper>
      <Container>
      <div className="why_certisured_13_icon">
        <span
          style={{
            fontSize: "48px",
            fontWeight: "600",
            color: "var(--secondaryColor",
          }}
        >
          13
        </span>
      </div>
      <h2>
        Extraordinary students will get a chance to present seminars in future
        workshops and online events
      </h2>
      <div className="border_line" />
      <p>
        Students who are invited get a certificate signed by Certisured and
        collaborating university for their contribution
      </p>
      </Container>
     
    </Wrapper>
  )
}

export default WhyCertisured13

const Wrapper = styled.div`
  grid-area: 18/2/19/11;
  display: flex;
  justify-content: center;
  .why_certisured_13_icon {
    width: 110px;
    height: 110px;
    grid-area: 1/1/2/2;
    background-image: url("${number}");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-weight: bold;
    font-size: 42px;
  }
  .border_line {
    width: 93.9px;
    height: 15px;
    background: var(--secondaryColor);
  }
  p {
    font-weight: normal;
    font-size: 28px;
    width: 50%;
    color: var(--secondaryColor);
  }

  @media (max-width : 479px){
    .why_certisured_13_icon{
      width: 62.96px !important;
      height: 62.96px !important;
        span{
          font-size: 23px !important;
        }
    }
    .border_line{
      width: 75px;
      height: 10px;
    }
   h2{
    font-size: 26px !important;
   }
   p{
     font-size: 17px !important;
     width: 100%;
   }
 
  }
  @media (max-width : 767px){

   h2{
     font-size: 30px;
   }
   p{
     width: 100%;
   }
 
  }
`
const Container = styled.div`
    width: 80%;
    @media (max-width: 767px){
         width: 100%;
    }

`