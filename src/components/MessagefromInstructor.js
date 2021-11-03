import React from "react"
import styled from "styled-components"

function MessagefromInstructor(props) {
  return (
    <Wrapper>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="banner_section">
        <iframe
          title="message from instructor"
          className="bg__header"
          src={props.videoUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </Wrapper>
  )
}

export default MessagefromInstructor

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  .title {
    grid-area: 1/2/2/6;
    @media (max-width: 767px) {
      grid-area: 1/2/2/8;
    }
  }
  .banner_section {
    grid-area: 2/2/3/11;
    background-color: gray;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 4:3 Aspect Ratio */
    border-radius: 6px;

    @media (max-width: 479px){
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
  h2 {
    color: var(--primaryColor);
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 25px;
    width: auto;
  }
  @media (max-width: 479px) {
    .title {
      grid-area: 1/2/2/11;
    }
    .banner_section {
      background: none;
      height: auto;
    }
    .bg__header {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`
