import React from "react"
import styled from "styled-components"
import number from "../../images/whycertisured/number circle.svg"

function WhyCertisured03(props) {
  return (
    <Wrapper style={{ gridArea: `${props.grid_area}` }}>
      <Container>
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
        <div className="heading">
          <h2>{props.title}</h2>
        </div>
        <div className="description">
          <p
            style={{
              paddingRight: `${props.paddingRight}`,
              fontSize: `${props.fontSize}`,
              fontWeight: `${props.fontWeight}`,
            }}
            
          >
            {props.desc}
          </p>
      
      </div>

      <div className="why_certisured_03_image">
        <img
          style={{ width: `${props.width}`, height: `${props.height}` }}
          src={props.img}
          alt="why certisured certificate"
        />
      </div>
      </Container>
       
    </Wrapper>
  )
}

export default WhyCertisured03

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  .why_certisured_03_image {
    display: block;
    position: absolute;
    grid-area: 2/2/3/3;
    right: 0;
    top: 66%;
    @media (max-width: 991px){
      top: 0;
    }
  }
  .heading {
    grid-area: 2/1/3/2;
  }
  .description {
    grid-area: 3/1/4/2;
  }
  h2 {
    font-size: 42px;
    font-weight: bold;
  }
  p {
    font-size: 28px;
    font-weight: 400;
  }
  .icon_wrapper {
    grid-area: 1/1/2/2;
    position: relative;
  }
  span {
    color: var(--thirdColor);
    font-weight: 500;
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
  @media (max-width : 480px){
    p{
      font-size: 17px;
    }
    .why_certisured_03_icon{
      width: 62.96px !important;
      height: 62.96px !important;

      span{
        font-size: 23px !important;
      }
    }
    .icon_wrapper{
      grid-area: 2/1/3/3;

    }
    .heading{
      grid-area: 2/1/3/3 !important;
      h2{
        font-size: 26px !important;
      }
    }
    .why_certisured_03_image{
      grid-area: 3/1/4/3;
      position: unset;
      img{
        height: auto !important;

      }
    }
    .description{
      grid-area: 4/1/5/3;
    }
  }
  @media (max-width : 991px){
   
    .icon_wrapper{
      grid-area: 2/1/3/3;

    }
    .heading{
      grid-area: 2/1/3/3;
      h2{
        font-size: 30px;
      }
    }
    .why_certisured_03_image{
      grid-area: 3/1/4/3;
      position: unset;
      img{
        height: auto !important;

      }
    }
    .description{
      grid-area: 4/1/5/3;
    }
  }
`
const Container = styled.div`
    width: 80%;
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  position: relative;
    @media (max-width: 767px){
         width: 100%;
    }

`