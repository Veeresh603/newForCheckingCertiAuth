import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"


function WelcomeDetails(props) {
  return (
    <Wrapper style={!props.style ? null : props.style}>
      <div id={!props.id ? null : props.id} className="whatwedo_consulting">
        <div className="heading">
          <h2>{props.data.main_title}</h2>
        </div>
        <div className="left_image">
          <div className="banner_section">
            <iframe
              title="message from instructor"
              className="bg__header"
              src={props.data.video_url}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
        <div className="right_text">
          <div>
            <h4 className="borderLeftRight">
              {props.data.title_and_desc.title}
            </h4>
          </div>
          <ReactMarkdown>{props.data.title_and_desc.descrption}</ReactMarkdown>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  .whatwedo_consulting {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 0px;
    @media (max-width: 767px) {
      grid-template-rows: auto;
    }
  }
  .heading {
    grid-area: 1/2/2/11;
  }
  .left_image {
    grid-area: 2/2/3/6;
    display: flex;
    align-items: center;
    margin-top: 95px;
    @media (max-width: 767px) {
      grid-area: 2/2/3/11;
      margin-top: 1rem;

    }
  }
  .right_text {
    grid-area: 2/7/3/11;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    /* justify-content: space-evenly; */
    @media (max-width: 767px) {
      grid-area: 3/2/4/11;
    }
  }
  h2 {
    width: auto;

    font-family: var(--family);
    font-weight: 600;
    color: var(--secondaryColor);

    font-size: 22px;
    @media (max-width: 767px) {
      font-size: 20px;
      height: auto;
    }
  }
  h4 {
    width: auto;

    font-family: var(--family);
    font-weight: 600;
    color: var(--secondaryColor);

    font-size: 30px;
    @media (max-width: 479px) {
      font-size: 18px;
      height: auto;
    }
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
    outline: none;
  }
  .banner_section {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 4:3 Aspect Ratio */
    border-radius: 6px;

    @media (max-width: 479px) {
      padding-top: 75%; /* 4:3 Aspect Ratio */
    }
  }
  .bg__header {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0.7; */
  }
  a {
    color: var(--secondaryColor);
    font-size: 17px;
  }
  button {
    background-color: #fff !important;
    border: none;
    text-decoration: underline;
    font-size: 17px;
    color: var(--secondaryColor);
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
    @media (max-width: 479px) {
      font-size: 14px;
    }
  }
  p {
    font-family: var(--family);
    /* margin:0; */
    /* padding:0; */
    color: #111111;
    text-align: justify;
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 479px) {
      font-size: 17px;
    }
    /* font-size: 18px !important;  } */
  }
`
// const ButtonStyled = styled.button`
//   padding: 15px 40px;
//   color: var(--linkColor);
//   transform: translate3d(0px, -1px, 0px);
//   width: auto;
//   background-color: #fff;
//   border: 1px solid var(--thirdColor);
//   font-family: var(--family);
//   border-radius: 6px;
//   transition: transform 0.25s ease, box-shadow 0.25s ease,
//     background-color 0.25s ease;
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   text-decoration: none;
//   font-size: 20px;
//   @media (max-width: 479px) {
//     padding: 12px 30px;
//     font-size: 14px;
//   }
//   &:hover {
//     color: var(--secondaryColor);
//     transform: translate3d(0px, -1px, 0px);
//     background-color: var(--primaryColor);
//     border: 1px solid transparent;
//     box-shadow: none;
//   }
// `
export default WelcomeDetails
