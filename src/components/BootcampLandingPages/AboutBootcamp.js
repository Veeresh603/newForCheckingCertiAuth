import React from "react"
import styled from "styled-components"
import { ImLocation } from "@react-icons/all-files/im/ImLocation"
import { ImCalendar } from "@react-icons/all-files/im/ImCalendar"
import { CgSandClock } from "@react-icons/all-files/cg/CgSandClock"
import ReactMarkdown from "react-markdown"

function AboutBootCamp({ data , onSrollDown3}) {
  return (
    <Wrapper>
      <div className="about-bootcamp-heading">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>
      <div className="about-bootcamp-image">
        <img src={data.about_bootcamp_media.url} alt={data.title} />
      </div>
      <div className="about-bootcamp-description">
        <div className="para">
          <ReactMarkdown>{data.about_bootcamp_desc}</ReactMarkdown>
        </div>
   
      </div>
      <div className="bootcamp_information">
          {data.about_bootcamp_events1.map((d, id) => {
            return (
              <div className="bootcamp-information-card" key={d.id}>
                <div className="icon_text">
                  {id === 0 && <ImLocation className="icon_sizes" />}
                  {id === 1 && <ImCalendar className="icon_sizes" />}
                  {id === 2 && <CgSandClock className="icon_sizes" />}

                  <h4
                    style={{
                      fontSize: "18px",
                      color: "var(--secondaryColor)",
                      fontWeight: "500",
                    }}
                  >
                    {d.title}
                  </h4>
                </div>
                <div>
                  <p style={{ textAlign: "center", fontSize: "13px" }}>
                    {d.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
    </Wrapper>
  )
}

export default AboutBootCamp

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  background-color: #e5e5e5;
  margin-top: 100px;

  padding: 50px 0px;

  .about-bootcamp-heading {
    grid-area: 1/2/2/11;
    padding-bottom: 25px;
  }
  .about-bootcamp-image {
    grid-area: 2/2/3/5;
  }
  .about-bootcamp-description {
    grid-area: 2/6/3/11;
  }
  .button_about_bootcamp {
    grid-area: 3/6/4/11;
    display: flex;
  }
  ul {
    padding: 0;
  }
  a {
    width: auto;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 6px;
    text-align: center;
    display: flex;
    background-color: var(--purpleColor);
    color: #fff;
    justify-content: center;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  h1 {
    padding-top: 0px !important;
    font-weight: bold;
    color: var(--secondaryColor);
    margin-top: 0px;
    font-size: 48px;
    letter-spacing: 0.04em;
    @media (max-width: 767px) {
      font-size: 36px;
    }
  }
  .bootcamp_information {
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    grid-area: 3/2/4/11;
    justify-content: center;
    padding: 30px 0px 0px 0px;
 
  }
  .bootcamp-information-card {
    max-width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: linear-gradient(145.66deg, #ffffff 0%, #ededed 79.33%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 18px;
    margin: 0 20px;

  }
  p {
    margin-top: 0px;
    @media (max-width: 767px) {
      margin-top: 10px;
    }
  }
  li {
    font-size: 18px;
    font-weight: normal;
    text-align: justify;
    letter-spacing: 0.03em;
    padding: 12px 0;
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
  .icon_text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon_sizes {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  @media (max-width: 1400px){
    .bootcamp-information-card{
      margin: 0 15px;
    }
  }
  @media (max-width: 991px){
    .bootcamp_information{
      grid-area: 3/2/4/11;
    }
  }
  @media (max-width: 767px) {
    img {
      width: 100%;
    }
    .about-bootcamp-image {
      grid-area: 2/2/3/11;
    }
    .about-bootcamp-description {
      grid-area: 3/2/4/11;
    }
    .bootcamp_information {
      display: flex;
      flex-direction: column;
      width: auto;
      height: auto;
      grid-area: 4/2/5/11;

    }
    .bootcamp-information-card{
      max-width: none;
      margin: 15px 0;
    }
    .button_about_bootcamp {
      grid-area: 4/2/5/11;
      display: flex;
      justify-content: center;
    }
  }
`
