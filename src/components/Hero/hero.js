import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft"
import { Link } from "gatsby"

function Hero(props) {
  return (
    <Wrapper>
      <div className="banner">
        <GatsbyImage
          style={{ width: "100%", height: "500px", opacity: "0.4" }}
          image={props.banner}
        />
      </div>
      <div className="banner_heading">
        <h1>{props.title}</h1>
        <Link to={props.link} className="link">
          {" "}
          <BsArrowLeft
            style={{
              color: "var(--primaryColor)",
              width: "40px",
              height: "40px",
            }}
          />{" "}
          {props.linktitle}
        </Link>
      </div>
    </Wrapper>
  )
}

export default Hero
const Wrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  position: relative;

  background-color: rgb(16, 29, 51, 0.8);

  .banner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    opacity: 0.7;
    height: 500px;
    position: absolute;
    z-index: 1;
    background-color: black;
  }

  .banner_heading {
    background-color: transparent;
    width: 84%;
    z-index: 1;
    grid-area: 1/2/2/7;
    h1 {
      color: white;
      z-index: 100;
      opacity: 1;
      font-size: 30px;
      font-weight: 600;
      width: 10px;
      background-color: var(--secondaryColor);
      padding: 0 10px;
    }
  }
  .link {
    text-decoration: none;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .link:hover {
    color: var(--primaryColor);
  }
`
const Img = styled(GatsbyImage)`
  object-fit: cover;
  max-width: 100% !important;
  max-height: 500px !important;
  @media (max-width: 479px) {
    height: 500px;
  }
`
