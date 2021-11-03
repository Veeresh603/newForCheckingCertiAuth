import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import LinkButton from "./LinkButton/button"
import ReactMarkdown from "react-markdown"
import scrollTo from "gatsby-plugin-smoothscroll"

function ConsultingGrid(props) {
  const {marginTop} = props
  return (
    <Wrapper style={!props.style ? null : props.style}>
      <div id={!props.id ? null : props.id} className="whatwedo_consulting">
        <div className="left_image">
          {props.image ? (
            <img
              className="image_background"
              style={!props.height ? null : props.height}
              src={props.img}
              alt={props.title}
            />
          ) : (
            <GatsbyImage
              image={props.img}
              className="image_background"
              style={!props.height ? null : props.height} />
          )}
        </div>
        <div className="right_text">
          <div>
            <h2 className="borderLeftRight">{props.title}</h2>
          </div>
          <ReactMarkdown>{props.desc}</ReactMarkdown>

          <div style={{ marginTop: "25px" }}>
            {!props.links ? (
              <LinkButton
                to={props.link}
                linkTitle={props.linktitle}
              ></LinkButton>
            ) : !props.button ? (
              <ButtonStyled onClick={() => scrollTo("#letstalk")}>
                {props.linktitle}
              </ButtonStyled>
            ) : null}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  /* margin-top:100px; */
  .whatwedo_consulting {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 0px;
    @media (max-width: 767px) {
      grid-template-rows: auto;
    }
  }
  .left_image {
    grid-area: 1/2/2/6;
    @media (max-width: 767px) {
      grid-area: 1/2/2/11;
    }
  }
  .right_text {
    grid-area: 1/7/2/11;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    /* justify-content: space-evenly; */
    @media (max-width: 767px) {
      grid-area: 2/2/2/11;
    }
  }
  h2 {
    width: auto;

    font-family: var(--family);
    font-weight: 600;
    color: var(--primaryColor);

    font-size: 30px;
    @media (max-width: 479px) {
      font-size: 20px;
      height: auto;
    }
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
    outline: none;
  }
  .image_background {
    background-color: var(--thirdColor);
    border-radius: 5px;
    object-fit: cover;
    height: 600px;
    width: 100%;
    background-blend-mode: screen;

    @media (max-width: 479px) {
      height: auto !important;
    }
  }
  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  blockquote {
    margin: 0;
    padding: 0;
  }
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .link {
    margin-top: 20px;
    padding: 18px 24px;
    color: var(--primaryColor);
    transform: translate3d(0px, -1px, 0px);
    background-color: #fff;
    border: 1px solid var(--primaryColor);
    width: 150px;

    border-radius: 6px;
    transition: transform 0.25s ease, box-shadow 0.25s ease,
      background-color 0.25s ease;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    text-decoration: none;
  }
  .link:hover {
    color: var(--primaryColor);
    transform: translate3d(0px, -1px, 0px);

    background-color: var(--primaryColor);
    color: #fff;
    box-shadow: none;
  }
  li,
  ul {
    padding-left: 0px;
    padding: 5px 0;
    font-size: 15px;
    font-weight: 400;
  }
  p {
    font-family: var(--family);
    /* margin:0; */
    /* padding:0; */
    color: #111111;
    text-align: justify;

    font-weight: 400;
    /* font-size: 18px !important;  } */
  }
`
const ButtonStyled = styled.button`
  padding: 15px 40px;
  color: var(--linkColor);
  transform: translate3d(0px, -1px, 0px);
  width: auto;
  background-color: #fff;
  border: 1px solid var(--thirdColor);
  font-family: var(--family);
  border-radius: 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  font-size: 20px;
  @media (max-width: 479px) {
    padding: 12px 30px;
    font-size: 14px;
  }
  &:hover {
    color: var(--secondaryColor);
    transform: translate3d(0px, -1px, 0px);
    background-color: var(--primaryColor);
    border: 1px solid transparent;
    box-shadow: none;
  }
`
export default ConsultingGrid
