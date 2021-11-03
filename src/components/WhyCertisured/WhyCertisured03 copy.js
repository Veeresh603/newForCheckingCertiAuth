import React from "react"
import styled from "styled-components"
import number from "../../images/whycertisured/number circle.svg"

function WhyCertisured03(props) {
  return (
    <Wrapper style={{ gridArea: `${props.grid_area}` }}>
      <Container>
      <div className="icon_wrapper">
        <div className="why_certisured_03_icon">
          <span
            style={{
              fontSize: "48px",
              fontWeight: "600",
              color: "var(--secondaryColor)",
            }}
          >
            {props.number}
          </span>
        </div>

        <div className="why_certisured_03_image">
          <img
            style={{ width: `${props.width}`, height: `${props.height}` }}
            src={props.img}
            alt="why certisured certificate"
          />
        </div>
        <div className="heading">
        <h2>{props.title}</h2>

        </div>
      </div>


      {!props.desc ?  <p
            style={{
              paddingRight: `${props.paddingRight}`,
              fontSize: `${props.fontSize}`,
              fontWeight: `${props.fontWeight}`,
            }}
            
          >
           From Industry experts about <span>the expectation in terms of skills</span> for a particular job profile
          </p> :  <p
            style={{
              paddingRight: `${props.paddingRight}`,
              fontSize: `${props.fontSize}`,
              fontWeight: `${props.fontWeight}`,
            }}
            
          >
            {props.desc}
          </p>}
      </Container>
      
    </Wrapper>
  )
}

export default WhyCertisured03

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  p{
      font-size: 28px !important;
      font-weight: 400 !important;
    }
  position: relative;

  .why_certisured_03_image {
    display: block;
    grid-area: 1/2/2/3;
    position: absolute;
    right: 0;
  }
  h2 {
    font-size: 42px;
    font-weight: bold;
  }
  p {
    font-size: 28px;
    font-weight: 400;
  }
  span {
    color: var(--thirdColor);
    font-weight: 500;
  }
  .icon_wrapper {
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-template-rows: auto;
    position: relative;

  }

  .why_certisured_03_icon {
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
  .description {
    grid-area: 3/1/4/3;
  }
  .heading {
    grid-area: 2/1/3/2;
  }

  @media (max-width : 480px){
    p{
      font-size: 17px !important;
    }
    .why_certisured_03_icon{
      width: 62.96px !important;
      height: 62.96px !important;

      span{
        font-size: 23px !important;
      }
    }
    .heading{
      grid-area: 2/1/3/3 !important;
      h2{
        font-size: 26px !important;
      }
    }
    .why_certisured_03_image{
      img{
        width: 100%;
        height: auto !important;
        bottom: 0;
      }
    }
  }
  @media (max-width : 767px){
 
    .icon_wrapper{
      grid-area: 2/1/3/3;

    }
    .heading{
      grid-area: 2/1/3/2;
      h2{
        font-size: 30px;
      }
    }
  
    .why_certisured_03_image{
      img{
        width: 100%;
        height: auto !important;
        bottom: 0;
      }
    }
  }
`
const Container = styled.div`
    width: 80%;
    @media (max-width: 767px){
         width: 100%;
    }

`