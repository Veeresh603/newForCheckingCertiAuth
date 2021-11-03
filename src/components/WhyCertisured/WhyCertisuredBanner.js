import React from "react"
import styled from "styled-components"
import HeroImage from "../../images/whycertisured/hero Image.svg"
import number from "../../images/whycertisured/number circle.svg"

function WhyCertisuredBanner() {
  return (
    <Wrapper>
      <div className="why_certisured_banner_section">
        <div className="why_certisured_banner_heading">
          <div className="heading">
            <h1>Why Certisured ?</h1>
          </div>
          <div className="heading_background_color" />
        </div>
        <div className="icon_and_advantages">
          <div className="why_certisured_banner_icon">
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
          <div className="advantages_section">
            <span>The Competitive</span>
            <h4>Advantages</h4>
          </div>
        </div>
        <div className="banner_details">
          <p>
            What student get apart from world class curriculum and{" "}
            <span>Master Mentorship</span>
          </p>
        </div>
      </div>
      <div className="why_certisured_banner_image">
        <img className="hero_svg" src={HeroImage} alt="banner_image" />
      </div>
    </Wrapper>
  )
}

export default WhyCertisuredBanner

const Wrapper = styled.div`
  grid-area: 1/2/2/11;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 50% 1fr;
  align-items: center;
  position: relative;
  padding-top: 100px;
  /* display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center; */
  .why_certisured_banner_section {
    grid-area: 1/1/2/2;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
  }
  .why_certisured_banner_image {
    grid-area: 1/2/2/3;
    .hero_svg {
        width: auto;

      }
  }
  .why_certisured_banner_heading {
    max-width: 500px;
    position: relative;
    display: flex;
    align-items: center;
    .heading {
      position: absolute;
      z-index: 1;
      height: 172.95px;
    }
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      color: #002f54;
      line-height: 126.5%;
      margin: 0;
      padding: 0;
    }
    .heading_background_color {
      position: relative;
      background-color: var(--thirdColor);
      width: 500px;
      height: 225.12px;
      top: 0;
      left: -180px;
    }
  }
  .icon_and_advantages {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 500px;
    margin-top: 20px;
    align-items: center;
    img {
      width: 90px;
      height: 90px;
    }
    .why_certisured_banner_icon {
      width: 120px;
      height: 120px;
      @media (max-width: 991px){
        width: 70px;
      height: 70px;
      }
      background-image: url("${number}");
      background-size: contain;
      background-repeat: no-repeat;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .advantages_section {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-left: 10px;
    }
    span {
      font-weight: 400;
      font-size: 17px;
    }
    h4 {
      margin: 0;
      font-weight: 600;
      font-size: 30px;
    }
  }
  .banner_details {
    width: 352px;
    height: 105.66px;
    p {
      font-weight: 300;
      font-size: 21px;
    }
    span {
      font-weight: 700;
    }
  }

  @media (max-width: 767px) {
    padding-top: 0px;
    .why_certisured_banner_image {
      grid-area: 1/1/2/3;
      width: 100%;
      min-height: 300px;
      position: relative;
      margin-bottom: 50px;
      .hero_svg {
        position: absolute;
        top: 0;
        width: 100%;
        height: 300px;

      }
      svg {
        height: auto;
      }
    }
    .why_certisured_banner_section {
      grid-area: 2/1/3/3;
    }
    .why_certisured_banner_heading {
      width: 100%;
      .heading_background_color {
        height: 136.33px;
      }

      .heading {
        height: auto;
      }
      h1 {
        font-size: 42px;
      }
    }
    .icon_and_advantages {
      .why_certisured_banner_icon {
        width: 78px;
        height: 78px;

        span {
          font-size: 28px !important;
        }
      }
    }
  }
  @media (max-width : 350px){
    .why_certisured_banner_heading{
      h1{
       font-size: 33px !important;
     }
     .heading_background_color{
      left: -134px;
    }
    }
  
  }
`
