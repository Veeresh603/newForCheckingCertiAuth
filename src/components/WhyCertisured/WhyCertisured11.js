import React from "react"
import styled from "styled-components"
import number from "../../images/whycertisured/number circle.svg"
import image from "../../images/whycertisured/Diana morris (1).png"
import name from "../../images/whycertisured/name.svg"

function WhyCertisured11() {
  return (
    <Wrapper>
      <Container>
        <div className="why_certisured_11_icon">
          <span
            style={{
              fontSize: "48px",
              fontWeight: "600",
              color: "var(--secondaryColor",
            }}
          >
            11
          </span>
        </div>
        <div className="why_certisured_11_heading">
          <h2>Soft skills, Presentation & Communication</h2>
        </div>
        <div className="why_certisured_11_description">
          <h4>DIANA MORRIS</h4>
          <h5>AUTHOR, FILM MAKER & TRAINER</h5>
          <div className="border_line" />
          <p>
            Diana Morris is a well known author, trainer and film maker. She
            also takes up special grooming classes to help freshers and young
            students hone their communication and presentation skills. This is
            especially needed in todays world where inter-personal skills is
            deciding factor for career growth.
          </p>
        </div>
        <div className="why_certisured_11_description_mobile">
          <h4>DIANA MORRIS</h4>
          <h5>AUTHOR, FILM MAKER & TRAINER</h5>
          <div className="border_line" />
        </div>
        <div className="why_certisured_11_description_01_mobile">
          <p>
            Diana Morris is a well known author, trainer and film maker. She
            also takes up special grooming classes to help freshers and young
            students hone their communication and presentation skills. This is
            especially needed in todays world where inter-personal skills is
            deciding factor for career growth.
          </p>
        </div>
        <div className="why_certisured_11_image">
          <img
            className="diana_morris_image"
            src={image}
            alt="wgy cerisured diana morris"
          />
          <div className="signature">
            <img src={name} alt="why certisured diana morris sign" />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default WhyCertisured11

const Wrapper = styled.div`
  grid-area: 16/2/17/11;
  display: grid;
  place-items: center;
  .why_certisured_11_icon {
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
  .why_certisured_11_heading {
    grid-area: 2/1/3/3;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      margin-bottom: 0;
    }
  }
  .why_certisured_11_description {
    grid-area: 3/1/4/2;
    h4 {
      font-weight: bold;
      font-size: 28px;
      color: var(--secondaryColor);
      margin-bottom: 0;
    }
    h5 {
      font-weight: 500;
      font-size: 22px;
      margin-top: 0;
      color: var(--secondaryColor);
      margin-bottom: 3px;
    }
    .border_line {
      width: 93.9px;
      height: 15px;
      background: var(--secondaryColor);
    }
    p {
      margin-top: 22px;
      font-weight: normal;
      font-size: 22px;
      color: var(--secondaryColor);
    }
  }
  .why_certisured_11_description_mobile {
    grid-area: 3/1/4/2;
    position: absolute;
    display: none;
    h4 {
      font-weight: bold;
      font-size: 36px;
      color: var(--secondaryColor);
      margin-bottom: 0;
    }
    h5 {
      font-weight: 500;
      font-size: 24px;
      margin-top: 0;
      color: var(--secondaryColor);
      margin-bottom: 3px;
    }
    .border_line {
      width: 93.9px;
      height: 15px;
      background: var(--secondaryColor);
    }
  }
  .why_certisured_11_description_01_mobile {
    display: none;
    position: absolute;
    p {
      margin-top: 30px;
      font-weight: normal;
      font-size: 24px;
      color: var(--secondaryColor);
    }
  }
  .why_certisured_11_image {
    grid-area: 3/2/4/3;
    margin-left: 30px;
    position: relative;
    height: 597px;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    .diana_morris_image {
      width: 80%;
      height: 597px;
    }
    .signature {
      position: absolute;
      width: 395.61px;
      height: 166.18px;
      bottom: 8%;
      left: -14%;

      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 479px) {
    .why_certisured_11_icon {
      width: 62.96px !important;
      height: 62.96px !important;

      span {
        font-size: 23px !important;
      }
    }
    .why_certisured_11_heading {
      h2 {
        font-size: 26px !important;
      }
    }
    .why_certisured_11_description {
      display: none;
      position: absolute;
      position: unset;
    }
    .why_certisured_11_description_mobile {
      display: block;
      grid-area: 3/1/4/3;
      position: unset;
      h4 {
        font-size: 20px;
      }
      h5 {
        font-size: 17px;
      }
      .border_line {
        width: 75px;
        height: 10px;
      }
    }
    .why_certisured_11_description_01_mobile {
      display: block;
      grid-area: 5/1/6/3;
      position: unset;
      p {
        font-size: 17px;
      }
    }
    .why_certisured_11_image {
      grid-area: 4/1/5/3;
      height: 295px;
      padding: 30px 0;
      margin-top: 0;
      .diana_morris_image {
        height: auto !important;
      }
      .signature {
        width: 50%;
        bottom: -17%;
      }
    }
  }
  @media (max-width: 767px) {
    .why_certisured_11_heading {
      h2 {
        font-size: 30px;
      }
    }
    .why_certisured_11_description {
      display: none;
      position: absolute;
      position: unset;
    }
    .why_certisured_11_description_mobile {
      display: block;
      grid-area: 3/1/4/3;
      position: unset;
      h4 {
        font-size: 18px;
      }
      h5 {
        font-size: 18px;
      }
      .border_line {
        width: 75px;
        height: 10px;
      }
    }
    .why_certisured_11_description_01_mobile {
      display: block;
      grid-area: 5/1/6/3;
      position: unset;
    }
    .why_certisured_11_image {
      grid-area: 4/1/5/3;
      height: auto;
      padding: 30px 0;
      margin-top: 0;
    }
  }
`
const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width: 767px) {
    width: 100%;
  }
`
