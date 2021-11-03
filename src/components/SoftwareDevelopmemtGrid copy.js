import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown"
import scrollTo from "gatsby-plugin-smoothscroll"
import PropTypes from "prop-types"
import LinkButton from "./LinkButton/button"
import {Link} from "gatsby"

function SoftwareDevelopmemtGrid(props) {
  return (
    <Wrapper style={!props.style ? null : props.style}>
      <div id={!props.id ? null : props.id} className="whatwedo_Software">
        {!props.video ? (
          <div className="right_image">
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
        ) : (
          <div className="right_image">
            <video
              className="bg__header"
              preload="auto"
              loop
              autoPlay
              muted
              style={{ height: "600px" }}
            >
              <source
                className="desktop"
                src="https://res.cloudinary.com/dvnb8joxk/video/upload/c_scale,h_600/c_scale,h_600/v1618397722/A_Smart_Dustbin_which_can_Talk_ygwbja.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
        )}
        <div className="left_text">
          <div>
            <h2 className="borderLeftRight">{props.title}</h2>
          </div>
          <div>
            <ReactMarkdown>{props.desc}</ReactMarkdown>
          </div>

          <div className={props.class ? `links_wrapper` : null}>
            {!props.links ? (
              <Link
                className={props.class ? `link_style `: null}
                to={props.link}
                linkTitle={props.linktitle}
              >  {props.linktitle}</Link>
            ) : !props.button ? (
              <button onClick={() => scrollTo("#letstalk")}>
                {props.linktitle}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  @media (max-width: 479px) {
    margin-top: 100px;
  }
  @media (max-width: 767px) {
    margin-top: 100px;
  }
  .whatwedo_Software {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    grid-gap: 0px;
    @media (max-width: 767px) {
      grid-template-rows: auto;
    }
  }
  .right_image {
    grid-area: 1/7/2/11;
    @media (max-width: 767px) {
      grid-area: auto/2/auto/11;
    }
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
  .left_text {
    grid-area: 1/2/2/6;
    display: flex;
    flex-flow: column;
    justify-content: center;
    @media (max-width: 767px) {
      grid-area: auto/2/3/11;
    }
  }
  a{
    color: var(--secondaryColor);
    font-size: 17px;

  }
  .links_wrapper{

    margin-top:20px;
  }
  button{
    background-color: #fff !important;
    border: none;
    text-decoration: underline;
    font-size: 17px;
    color: var(--secondaryColor);
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

  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  li,
  ul {
    padding-left: 0px;
    list-style: none;
    padding: 10px 0;
    font-size: 15px;
    font-weight: 600;
  }
  p {
    font-family: var(--family);
    color: #111111;
    font-weight: 400;
    text-align: justify;

    /* font-size: 18px !important; */
  }
  .bg__header {
    width: auto;
  }
  .link_style{
    padding: 15px 20px;
    background-color: var(--thirdColor);
    border-radius: 6px;
    text-decoration: none;
  }
`
SoftwareDevelopmemtGrid.propTypes = {
  links: PropTypes.bool,
  button: PropTypes.bool,
  image: PropTypes.bool,
}
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
  font-size: 18px;
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
export default SoftwareDevelopmemtGrid
