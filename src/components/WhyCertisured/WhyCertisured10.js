import React from "react"
import styled from "styled-components"
import number from "../../images/whycertisured/number circle.svg"
import img_10 from "../../images/whycertisured/10 paid.svg"

function WhyCertisured10() {
  return (
    <Wrapper>
      <Container>
      <div className="why_certisured_10_icon">
        <span
          style={{
            fontSize: "48px",
            fontWeight: "600",
            color: "var(--secondaryColor)",
          }}
        >
          10
        </span>
      </div>
      <h2>
        Paid Internship <span style={{ color: "#D22B6E" }}>$</span>
      </h2>
      <p>
        Certisured aims to ensure that each student is skilled enough to claim a
        paid internship
      </p>
      <div className="img_wrapper">
      <img src={img_10} alt="" />

      </div>
      </Container>
     
    </Wrapper>
  )
}

export default WhyCertisured10

const Wrapper = styled.div`
  grid-area: 15/2/16/11;
  display: flex;
  justify-content: center;
  .why_certisured_10_icon {
    width: 110px;
    height: 110px;

    background-image: url("${number}");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: var(--secondaryColor);
  }
  img {
    width: 739px;
    height: 603px;
  }
  .img_wrapper{
      display: flex;
      justify-content: center;
  }
  @media (max-width : 479px){
     .why_certisured_10_icon{
       width: 62.96px;
       height: 62.96px;

       span{
         font-size: 23px !important;
       }
     }
     h2{
      font-size: 26px !important;
     }
     p{
       font-size: 17px;
     }
     img{
       width: 100%;
       height: auto;
     }
  }

  @media (max-width: 767px){
    img{
       width: 100%;
       height: auto;
     }
  }
`
const Container = styled.div`
    width: 80%;
    @media (max-width: 767px){
         width: 100%;
    }

`