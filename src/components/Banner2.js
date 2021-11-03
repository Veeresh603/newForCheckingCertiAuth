import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft"

function Banner2(props) {
  return (
    <Wrapper style={!props.style ? null : props.style}>
      <div className="parent">
        <div className="background">
          {!props.img ? (
            <GatsbyImage
              image={props.image}
              alt={props.title}
              style={{
                maxWidth: "100% !important",
                height: "600px",
                opacity: "0.6",
                maxHeight: "600px !important",
                width: "100%"
              }} />
          ) : (
            <img
              style={{
                width: "100%",
                height: "600px",
                opacity: "0.6",
              }}
              src={props.image}
              alt={props.title}
            />
          )}
        </div>
        <div className="title">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          {!props.registration ? null : (
            <h6 style={{marginBottom: "0px"}}>
              {props.registration} 
            </h6>
          )}
              {props.event === "null"  ? null : !props.event ? null : (
            <h6 style={{backgroundColor: "var(--primaryColor)", color: "var(--secondaryColor)"}}>
              {props.event} 
            </h6>
          )}
          <Link to={props.link} className="link">
            <BsArrowLeft
              style={{
                color: "#fff",
                width: "40px",
                height: "40px",
              }}
            />
            {props.linktitle}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner2

const Wrapper = styled.div`
  width: 100%;
  .parent {
    /* position: relative; */
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 0px;
    height: 600px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    @media (max-width: 479px) {
      font-size: 13px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
  }
  .title {
    grid-area: 1/2/2/8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 1;
    color: #fff;
    @media (max-width: 991px) {
      grid-area: 1/2/2/11;
    }
    @media (max-width: 767px) {
      grid-area: 1/2/2/11;
    }
    @media (max-width: 479px) {
      margin-top: 60px;
      grid-area: 1/2/2/11;
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

  .background {
    position: absolute;
    background-color: #111111;
    width: 100%;
    height: 600px;
    /* opacity: 0.8; */
  }
  .bg__header {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    grid-area: 1/1/2/12;
    /* opacity: 0.7; */
  }
  h6 {
    font-size: 15px;
    width: auto;
    border: 1px solid transparent;
    background-color: var(--purpleColor);
    color:#ffffff;
    padding: 15px;
    border-radius:6px;
  }
`
