import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import MyTimer from "./MyTimer"
import scrollTo from "gatsby-plugin-smoothscroll"

function BootcampEvents({ data }) {
  const newTime = new Date(`${data.event_date_time.date_and_time}`)
  return (
    <Wrapper>
      <div className="bootcamp_event_section">
        <div className="bootcamp_events_left_section">
          <div className="heading">
            <span>{data.span}</span>
            <h1>{data.title}</h1>
          </div>
          <div className="para">
            <ReactMarkdown>{data.description}</ReactMarkdown>
          </div>
          <div className="video">
            <lite-youtube
              style={{ borderRadius: "6px" }}
              params="controls=0&enablejsapi=1"
              videoplay="Mirar"
              videoid={data.video_link}
            ></lite-youtube>
          </div>
        </div>
        <div className="bootcamp_events_right_section">
          <div className="apply_now">
            <h2>{data.event_date_time.title}</h2>
          </div>
          <div className="apply_now_para">
            <ReactMarkdown>{data.event_date_time.description}</ReactMarkdown>
          </div>
          <div className="apply_now_timer">
            <MyTimer expiryTimestamp={newTime} />
          </div>
          <div className="apply_now_button">
            <button  onClick={() => scrollTo("#pricing1")}>{data.event_date_time.button_label}</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default BootcampEvents

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  margin-top: 100px;

  .bootcamp_event_section {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: linear-gradient(145.66deg, #ffffff 0%, #ededed 79.33%);
    box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.2);
    border-radius: 18px;

    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 991px) {
      width: 90%;
      flex-direction: column;
    }
  }
  .bootcamp_events_left_section {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    padding: 55px;
    border-right: 2px solid var(--secondaryColor);
    @media (max-width: 991px) {
      width: 100%;
      border-bottom: 2px solid var(--secondaryColor);
      border-right: none;
    }
    @media (max-width: 479px) {
      padding: 30px;
      border-right: none;

    }
    h1 {
      margin-top: 0px;
      font-weight: 600;
      font-size: 35.27px;
      letter-spacing: 0.05em;
      color: var(--secondaryColor);
      @media (max-width: 479px) {
        font-size: 26px;
    }
    }
    span {
      font-size: 19.1px;
      font-weight: 400;
      letter-spacing: 0.05em;
      color: var(--secondaryColor);
    }
    p {
      margin: 20px 0;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.05em;
    }
  }
  .bootcamp_events_right_section {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 55px;
    justify-content: center;
    @media (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 479px) {
      padding: 30px;
    }
    h2 {
      font-weight: 600;
      font-size: 22px;
      letter-spacing: 0.05em;
      color: var(--secondaryColor);
    }
    p {
      margin: 20px 0;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.05em;
    }
    .apply_now_button {
      display: flex;
      justify-content: flex-start;
      button {
        min-width: 160px;
        background-color: var(--thirdColor);
        color: var(--secondaryColor);
        border-radius: 59px;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        border: none;
      }
    }
  }
`
