import React from "react"
import styled from "styled-components"
import HeroImage from "../images/whycertisured/hero Image.svg"

function WhyCertisuredBanner() {
  return (
    <Wrapper>
      <div className="main_wrapper">
        <div className="home_banner_section">
          <div className="heading">
            <h1>
              Re-defining the <br></br>strength of certification.
            </h1>
          </div>
          <div className="para">
            <p>
              Certisured is an edtech platform focused on advanced
              certifications on Artificial Intelligence, Machine Learning,
              Information Security, Data Science, Data Driven Marketing,
              Internet of Things, Blockchain, Automation and many more cutting
              edge technologies, enabling you to position yourself strongly for
              industry 4.0 revolution.
            </p>
          </div>
        </div>
        <div className="why_certisured_banner_image">
          <img className="hero_svg" src={HeroImage} alt="banner_image" />
        </div>
      </div>
    </Wrapper>
  )
}

export default WhyCertisuredBanner

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(11, 1fr);
  align-items: center;
  position: relative;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  min-height: 85vh;
  /* display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center; */
  .main_wrapper {
    grid-area: 1/2/2/11;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 54% 46%;
    align-items: center;
    position: relative;
    justify-content: center;
  }

  .why_certisured_banner_image {
    grid-area: 1/2/2/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    .hero_svg {
      width: auto;
    }
  }
  .home_banner_section {
    grid-area: 1/1/2/2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    .heading {
      width: 100%;
      height: auto;
      h1 {
        font-size: 47px;
        font-weight: 600;
      }
    }
    .para {
      width: 90%;
      height: auto;

      p {
        font-size: 22px;
        font-weight: 400;
        text-align: justify;
        margin: 0px;
        padding: 0px;
      }
    }
  }
  @media (max-width: 1400px) {
    .home_banner_section {
      .heading {
        h1 {
          font-size: 42px;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 1240px) {
    .home_banner_section {
      .heading {
        h1 {
          font-size: 36px;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .why_certisured_banner_image {
      grid-area: 1/1/2/3;
      width: 100%;
      min-height: 300px;
      position: relative;
      padding: 100px 0;
      /* margin-bottom: 50px; */
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
    .home_banner_section {
      grid-area: 2/1/3/3;
      width: 100%;

      h1 {
        font-size: 42px !important;
      }
      p {
        font-size: 16px !important;
      }
    }
  }
  @media (max-width: 767px) {
    .home_banner_section {
      .heading {
        h1 {
          font-size: 36px;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 479px) {
    .home_banner_section {
      .heading {
        h1 {
          font-size: 26px !important;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 404px) {
    .home_banner_section {
      .heading {
        h1 {
          font-size: 24px !important;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 424px) {
    .home_banner_section {
      .heading {
        h1 {
          font-size: 20px !important;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 350px) {
    .why_certisured_banner_heading {
      h1 {
        font-size: 22px !important;
      }
    }
  }
`
