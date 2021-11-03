import React from "react"
import styled from "styled-components"

function MessageFromFounder() {

  return (
    <Wrapper>
      <div className="message_from_founder_heading">
        <h2>message from founder</h2>
      </div>
      <div className="message_from_founder_video">
        <lite-youtube
          style={{ borderRadius: "6px" }}
          params="controls=0&enablejsapi=1"
          videoplay="Mirar"
          videoid="eAWlPa9eosU"
        ></lite-youtube>
      </div>
    </Wrapper>
  )
}

export default MessageFromFounder

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  padding: 100px 0;
  @media (max-width: 479px) {
    width: 100%;
    padding: 5px 0;
  }

  .message_from_founder_heading {
    grid-area: 1/2/2/11;
    width: 100%auto;
    @media (max-width: 479px) {
      text-align: center;
    }
  }
  .message_from_founder_video {
    grid-area: 2/2/3/11;
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: auto;
    @media (max-width: 479px) {
      grid-area: 2/2/3/11;
    }
  }
`
