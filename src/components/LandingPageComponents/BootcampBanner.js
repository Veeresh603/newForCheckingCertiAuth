import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

function BootcampBanner(props) {
  const { data, onSrollDown, onSrollDown1 } = props
  return (
    <Wrapper>
      <div className="banner-heading">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>
      <div className="section">
        <div className="bootcamp-banner">
          <div className="bootcamp-description">
            <p>{data.bootcamp_banner_desc}</p>
          </div>
          <div className="button-wrapper">
            <div className="button-1">
              <button
                className="register"
                onClick={() => scrollTo("#benefits")}
              >
                {data.Register_button.button_label}
              </button>
            </div>
            <div className="button-2">
              <button
                className="discord"
                onClick={() => scrollTo("#whydiscord")}
              >
                {data.why_discord_button.button_label}
              </button>
            </div>
          </div>
        </div>
        <div className="right_section_video">
          <lite-youtube
            style={{ borderRadius: "6px" }}
            params="controls=0&enablejsapi=1"
            videoplay="Mirar"
            videoid={data.video_link}
          ></lite-youtube>
        </div>
      </div>
    </Wrapper>
  )
}

export default BootcampBanner

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  margin-top: 155px;

  .section {
    grid-area: 2/2/3/11;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    height: auto;
    padding-bottom: 70px;
    @media (max-width: 767px) {
      padding-bottom: 0px;
    }
  }

  .right_section_video {
    grid-area: 1/7/2/12;
    display: flex;
    align-items: center;
    margin-top: -130px;
    @media (max-width: 767px) {
      grid-area: 1/1/2/12;
      margin-top: 0px;
      width: 100%;
    }
  }

  .banner-heading {
    grid-area: 1/2/2/7;
    @media (max-width: 479px) {
      grid-area: 1/2/2/11;
    }
  }
  .bootcamp-banner {
    grid-area: 1/1/2/6;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
      grid-area: 2/1/3/12;
    }
  }
  .bootcamp-video {
    grid-area: 1/7/2/12;
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;
    margin-top: -122px;
    @media (max-width: 767px) {
      grid-area: 1/1/2/12;
      margin-top: 0px;
    }
  }
  p {
    padding: 0px !important;
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
    letter-spacing: 0.03em;

    color: #151515;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  h1 {
    padding-top: 0px !important;
    font-weight: bold;
    color: var(--secondaryColor);
    margin-top: 0px;
    font-size: 48px;
    letter-spacing: 0.04em;
    line-height: 1.2;
    @media (max-width: 767px) {
      font-size: 36px;
    }
  }

  .button-wrapper {
    display: flex;
    margin-top: 37px;
    @media (max-width: 767px) {
      margin-top: 30px;
      grid-area: 3/1/4/12;
    }
    @media (max-width: 479px) {
      flex-direction: column;
    }
  }
  .register {
    text-decoration: none;
    display: flex;
    text-align: center;
    padding: 15px 30px;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    border-radius: 66.5808px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    min-width: 210px;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .discord {
    text-decoration: none;
    display: flex;
    text-align: center;
    min-width: 210px;
    padding: 15px 30px;
    background-color: #fff;
    border: 1px solid var(--thirdColor);
    color: var(--secondaryColor);
    border-radius: 66.5808px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    cursor: pointer;
    justify-content: center;
  }
  .button-2 {
    display: flex;
    margin-left: 11.2px;
    @media (max-width: 479px) {
      margin-left: 0px;
      margin-top: 15px;
    }
  }
  .button-1 {
    display: flex;
  }
`
