import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import info from "../../../images/info 11.svg"
import FormDialog from "../../FormDialogcopy/FormDialog"

function BootcampFrequentlyAsked({ data, brochure, slug , button}) {

  return (
    <Wrapper>
      <div className="bootcamp_frequently_asked_heading">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>
      <div className="bootcamp_frequently_asked_main_heading">
        <h2>{data.main_heading}</h2>
      </div>
      <div className="bootcamp_frequently_asked_main_section">
        {data.frequenty_asked_question.map(d => (
          <div className="frequently_asked_section" key={d.id}>
            <img src={info} alt="info" />

            <div className="asked_question_description">
              <h3>{d.title}</h3>
              <ReactMarkdown>{d.description}</ReactMarkdown>
            </div>
          </div>
        ))}
      {button &&  <div className="brochure_audio_wrapper">
          <div className="brochure_audio_section">
            <div className="brochure_section">
              <FormDialog
                mailchimp={true}
                title={brochure}
                slug={slug}
              />
            </div>
          </div>
        </div>}
      </div>
    </Wrapper>
  )
}

export default BootcampFrequentlyAsked
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  margin-top: 120px;
  @media (max-width: 479px) {
    margin-top: 125px;
  }
  span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 479px) {
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
    @media (max-width: 479px) {
      font-size: 34px;
    }
  }
  .brochure_audio_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .audio_section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 107px;
    max-width: 250px;

    @media(max-width: 479px){
      margin-left: 0px;
    }
  }
  .brochure_section{
    margin-right: 0px;

    @media(max-width: 479px){
      margin-right: 0px;
    }
  }
  .brochure_audio_section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .bootcamp_frequently_asked_heading {
    grid-area: 1/2/2/6;
    @media (max-width: 479px) {
      grid-area: 1/2/2/11;
    }
  }
  .bootcamp_frequently_asked_main_heading {
    grid-area: 2/1/3/12;
    display: flex;
    justify-content: center;
    padding: 0 300px;
    text-align: center;
    @media (max-width: 991px) {
      padding: 0 100px;
    }
    @media (max-width: 479px) {
      padding: 0px !important;
    }
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    @media (max-width: 479px) {
      font-size: 22px;
      font-weight: 500;
      padding: 0 10px;
    }
  }
  .bootcamp_frequently_asked_main_section {
    grid-area: 3/2/4/11;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .frequently_asked_section {
    width: 400px;
    height: auto;
    padding: 20px 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    @media (max-width: 479px) {
      width: auto;
      padding: 0px;
    }
  }
  .icon_with_title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .asked_question_description {
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    padding-left: 15px;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    padding-left: 15px;
  }
  .audio-player {
    background-color: black;
  height: auto;
  min-height: 10rem;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#play {
  cursor: pointer;
}
.player-img{
  width: 90px;
  height:90px !important;
}
`
