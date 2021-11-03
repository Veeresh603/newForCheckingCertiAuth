import React from "react"
import styled from "styled-components"
import Technologies from "./TechnologyStackCarousel"

const styles = {
  backgroundPosition: `center center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
}

function LanguageTools({ data }) {
  return (
    <Wrapper>
      <div className="language-tools-heading">
        <h1>{data.text}</h1>
      </div>
      <div className="language-tools-box-section">
        <Technologies data={data} />
      </div>
    </Wrapper>
  )
}

export default LanguageTools

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  margin-top: 100px;

  .language-tools-heading {
    grid-area: 1/1/2/12;
    text-align: center;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      padding: 0 20px;
    }
  }
  .language-tools-box-section {
    grid-area: 2/1/3/12;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  .langauage-tools-box {
    width: 145px;
    height: 145px;
    margin-left: 15px;
    margin-top: 10px;
  }
  /* img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
  } */
  h1 {
    margin: 0;
    padding: 0;
    color: var(--secondaryColor);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.02em;
    @media (max-width: 767px) {
      font-size: 22px;
      font-weight: 500;
    }
  }
  .slick-slider {
    grid-area: 2/2/3/11;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
  }
  .slick-list {
    grid-area: 1/1/2/12;
  }
  .slick-slide {
    margin-right: 20px;
    @media (max-width: 479px) {
      margin-right: 0px;
    }
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
`
