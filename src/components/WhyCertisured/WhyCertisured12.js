import React from "react"
import styled from "styled-components"
import number from "../../images/whycertisured/number circle.svg"
import sign from "../../images/whycertisured/name 1.svg"
import image from "../../images/whycertisured/nelly calderia (1).png"

function WhyCertisured12() {
  return (
    <Wrapper>
      <Container>
      <div className="why_certisured_12_icon">
        <span
          style={{
            fontSize: "48px",
            fontWeight: "600",
            color: "var(--secondaryColor",
          }}
        >
          12
        </span>
      </div>
      <div className="why_certisured_12_heading">
        <h2>Self mastery with Neuro linguistic Programming</h2>
      </div>
      <div className="why_certisured_12_mini_heading">
        <h3>
          Self Mastery with certified NLP Coach and Master practitioner from ,
          California, United States
        </h3>
        <h4>Nelly Caldeira</h4>
        <div className="border_line" />
        <p>
          Nelly is a highly trained NLP Master Practitioner from Brazil,
          presently practicing in California. She's an avid reader, philosopher
          & is constantly researching self improvement techniques for collective
          well being
        </p>
        <h4>Her Skills</h4>
        <div className="border_line" />
        <ul>
          <li>Personal Transformation </li>
          <li>Authentic & Effective Communication</li>
          <li>Mental & Emotional Intelligence</li>
          <li>Goals setting & values</li>
          <li>Action and Clarity Coaching</li>
          <li>Non-Violent Communication</li>
          <li>Break-through sessions </li>
          <li>International Brazilian Zouk artist</li>
        </ul>
      </div>
      <div className="why_certisured_12_mini_mobile_heading">
      
        <h4>Nelly Caldeira</h4>
        <div className="border_line" />
        <p>
          Nelly is a highly trained NLP Master Practitioner from Brazil,
          presently practicing in California. She's an avid reader, philosopher
          & is constantly researching self improvement techniques for collective
          well being
        </p>
        <h4>Her Skills</h4>
        <div className="border_line" />
        <ul>
          <li>Personal Transformation </li>
          <li>Authentic & Effective Communication</li>
          <li>Mental & Emotional Intelligence</li>
          <li>Goals setting & values</li>
          <li>Action and Clarity Coaching</li>
          <li>Non-Violent Communication</li>
          <li>Break-through sessions </li>
          <li>International Brazilian Zouk artist</li>
        </ul>
      </div>
      <div className="mini_mobile_description">
      <h3>
          Self Mastery with certified NLP Coach and Master practitioner from ,
          California, United States
        </h3>
      </div>
      <div className="why_certisured_12_image">
        <img
          className="nelly_calderia"
          src={image}
          alt="why certisured nelly caldeira"
        />
        <div className="signature">
          <img src={sign} alt="why certisured nelly caldeira sign" />
        </div>
      </div>
      </Container>
    
    </Wrapper>
  )
}

export default WhyCertisured12

const Wrapper = styled.div`
  grid-area: 17/2/18/11;
  display: grid;
  place-items: center;
  .why_certisured_12_icon {
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
  .why_certisured_12_heading {
    grid-area: 2/1/3/3;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
    }
  }
  .why_certisured_12_mini_heading {
    grid-area: 3/1/4/2;
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #d22b6e;
    }
    .border_line {
      width: 93.9px;
      height: 15px;
      background: var(--secondaryColor);
    }
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      margin-bottom: 3px;
      color: var(--secondaryColor);
    }
    p {
      margin-top: 22px;
      font-weight: normal;
      font-size: 22px;
      color: var(--secondaryColor);
    }
    li {
      font-weight: 400;
      font-size: 22px;
      color: var(--secondaryColor);
      padding: 10px;
    }
    li::marker {
      color: var(--thirdColor);
    }
  }
  .why_certisured_12_mini_mobile_heading {
    display: none;
    grid-area: 3/1/4/2;
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      color: #d22b6e;
    }
    .border_line {
      width: 93.9px;
      height: 15px;
      background: var(--secondaryColor);
    }
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 38px;
      margin-bottom: 3px;
      color: var(--secondaryColor);
    }
    p {
      margin-top: 30px;
      font-weight: normal;
      font-size: 24px;
      color: var(--secondaryColor);
    }
    li {
      font-weight: 400;
      font-size: 24px;
      color: var(--secondaryColor);
      padding: 10px;
    }
    li::marker {
      color: var(--thirdColor);
    }
  }
  .mini_mobile_description{
    display: none;
    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      color: #d22b6e;
    }
  }
  .why_certisured_12_image {
    grid-area: 3/2/4/3;
    margin-left: 30px;
    position: relative;
    height: 832px;
    display: flex;
    justify-content: flex-end;
    .nelly_calderia {
      width: 80%;
      height: 832px;

    }
    .signature {
      position: absolute;
      bottom: 1%;
      width: 417.44px;
      height: 156.94px;
      left: -9%;
    }
  }

  @media (max-width: 767px){
      .why_certisured_12_mini_heading{
        display: none;
      }
      .mini_mobile_description{
        grid-area: 3/1/4/3;
        display: block;
        h3{
          font-size: 20px;
        }
      }
      .why_certisured_12_image{
        grid-area: 4/1/5/3;
      }
      .why_certisured_12_mini_mobile_heading{
        grid-area: 5/1/6/3;
        display: block;
        h4{
          font-size: 20px;
        }
        p{
          font-size: 17px;
        }
        li{
          font-size: 17px;
        }
        .border_line{
          width: 75px;
          height: 10px;
        }
      }
  }
  @media (max-width : 479px){
    .why_certisured_12_icon{
      width: 62.96px !important;
      height: 62.96px !important;
        span{
          font-size: 23px !important;
        }
    }
    .why_certisured_12_heading{
      h2{
        font-size: 26px !important;
      }
    }
    .why_certisured_12_image{
        grid-area: 4/1/5/3;
        height: 453px;
        .nelly_calderia{
          height: 453px !important;
        }
        .signature{
        width: 50%;
        bottom: -17%;

        
      }
      }
  }
`
const Container = styled.div`
    width: 80%;
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
    @media (max-width: 767px){
         width: 100%;
    }

`