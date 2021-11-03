import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"
import Carousel from "react-grid-carousel"
import ReactTooltip from "react-tooltip"

import ReactMarkdown from "react-markdown"
import HeadingBorderAnim from "../HeadingBorderAnim"
import { BsInfoCircle } from "@react-icons/all-files/bs/BsInfoCircle"

// import linkedin from "../../images/linkedin.svg"

function WhatWeAreThinking(props) {
  const category = props.video_review[0].category_name

  const [state, setState] = React.useState({
    course: `${category}`,
  })
  const [next, setNext] = React.useState(4)
  const [start, setStart] = React.useState(0)

  const handleShow = () => {
    setStart(next)
    setNext(next + 4)
  }
  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  return (
    <Wrapper>
      <div className="section_right">
        <div className="uppersection">
          <HeadingBorderAnim>{props.title}</HeadingBorderAnim>
        </div>
        <div>
          <SelectDay>
            <NativeSelection
              value={state.course}
              name="course"
              onChange={handleChange}
              inputProps={{ "aria-label": "course" }}
            >
              {props.video_review.map((d) => (
                <option value={d.category_name}>{d.category_name}</option>
              ))}
            </NativeSelection>
          </SelectDay>
        </div>
        <div className="video_review_section">
          <Carousel
            rows={2}
            cols={2}
            gap={10}
            loop
            responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 2,
              },
              {
                breakpoint: 990,
                cols: 2,
                rows: 1,
              },
            ]}
            mobileBreakpoint={670}
            className="carousel_item"
          >
            {props.video_review.map((l) => {
              return (
                l.category_name === state.course &&
                l.video_reviews.map((k) => (
                  <Carousel.Item
                    key={k.id}
                    className="carousel_item"
                    style={{ overflow: "hidden" }}
                  >
                    <div className="video_review">
                      <lite-youtube
                        style={{ borderRadius: "6px" }}
                        params="controls=0&enablejsapi=1"
                        videoplay="Mirar"
                        videoid={k.video_link}
                      ></lite-youtube>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#F5F4FD",
                        width: "100%",
                        padding: "0px 15px",
                        paddingBottom: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                      }}
                    >
                      <div className="name_surname">
                        <h3>{k.name}</h3>
                        <h5 style={{ textAlign: "center" }}>{k.designation}</h5>
                      </div>
                      {/* <div className="linkedin_section">
                        <a href="https://certisured.com/">
                          <img
                            style={{ width: "30px", height: "30px" }}
                            src={linkedin}
                            alt=""
                          />
                        </a>
                      </div> */}
                    </div>
                  </Carousel.Item>
                ))
              )
            })}
          </Carousel>
        </div>
      </div>

      <div className="section_left">
        <div className="section_left_column">
          <div className="uppersection">
            <HeadingBorderAnim>{props.discord.title}</HeadingBorderAnim>
          </div>
          <div className="text">
            <div className="news_image">
              <StaticImage src="../../images/pic.png" />
            </div>
            <ReactMarkdown>{props.discord.description}</ReactMarkdown>
            <div className="connect_to_discord">
              <div style={{ display: "flex" }}>
                <a className="discord_link" href={props.discord.button_link}>
                  {props.discord.button_label}
                </a>
              </div>

              <div className="question_icon">
                <a data-tip data-for="happyFace">
                  <BsInfoCircle />
                </a>
                <ReactTooltip
                  id="happyFace"
                  place="top"
                  type="info"
                  effect="solid"
                >
                  <ReactMarkdown>
                    {props.discord.popup_message_description}
                  </ReactMarkdown>
                </ReactTooltip>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </Wrapper>
  )
}

export default WhatWeAreThinking

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  height: auto;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  width: 100%;
  background-size: cover;
  @media (max-width: 479px) {
    margin-bottom: 20px;
  }
  .section_right {
    width: 100%;
    grid-area: 1/6/2/11;
  }

  .video_review {
    position: relative;

    width: 100%;
  }

  .h4 {
    background-color: #f1f1f1;
    width: 90%;
    height: auto;
    padding: 20px 10px;
    margin-top: -31px;
    z-index: 1;
    border-radius: 5px;
    color: var(--secondaryColor);
    text-align: center;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    font-weight: 400;
  }
  .h3 {
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    font-weight: 500;
  }

  .h2 {
    color: var(--primaryColor);
    font-size: 20px;
    font-weight: 600;
  }

  .bottom {
    min-height: 280px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    padding: 40px 0;
    h4 {
      font-weight: 600;
      color: #fff;
    }
    h5 {
      font-weight: 600;
      color: #fff;
    }
  }
  .bottom_section_section {
    background-image: url("https://res.cloudinary.com/dtoupvd2u/image/upload/v1628600993/discord_teamgs.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
  }
  .bottom_section {
    grid-area: auto/7/auto/12;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 6px;
  }
  .question_icon {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 15px;
    svg {
      font-size: 30px;
    }
  }
  .bottom_section p {
    color: white;
    font-size: 16px;
    /* padding-bottom: 10px; */
  }
  .section_left {
    grid-area: 1/2/2/5;
  }
  .WithStyles\(ForwardRef\(AccordionSummary\)\)-root-15 {
    border-bottom: 1px solid #fff;
  }
  .lglSwW {
    width: 100%;
  }
  /* .slick-slide{
    width: auto !important;
  } */
  @media (max-width: 479px) {
    .bottom_section {
      grid-area: 3/1/4/12 !important;
      margin-top: 0px;
      justify-content: flex-start;
    }
    .p {
      padding-bottom: 10px;
      font-size: 12px;
    }
    .h2 {
      font-size: 20px;
    }
    .h4 {
      font-size: 13px;
    }
    .section_right {
      grid-area: 1/2/2/11 !important;
      margin-top: 0px;
    }
  }
  @media (max-width: 767px) {
    .bottom_section {
      grid-area: 3/5/4/12;
      height: auto;
      margin-top: 0px;
      justify-content: flex-start;
    }
    .bottom {
      height: auto !important;
      padding-bottom: 35px;
      padding-top: 20px;
    }
    .h3 {
      font-size: 17px;
    }
    .section_right {
      grid-area: 1/2/2/11;
      font-size: 17px;
      margin-top: 50px;
    }
    .section_left {
      grid-area: 2/2/3/11;
      margin-top: 0px;
    }
  }
  .slick-slider {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    width: 100%;
  }
  .slick-list {
    grid-area: 1/1/2/12;
  }

  .whatweare_image.gatsby-image-wrapper {
    height: 300px;
    @media (max-width: 479px) {
      height: 190px !important;
    }
  }
  .letstak_desktop {
    @media (max-width: 479px) {
      display: none;
    }
  }
  .name_surname {
    display: flex;
    flex-direction: column;
    text-align: center;

    h5 {
      font-weight: normal;
      font-size: 11px;
      margin: 0px;
      text-align: center;
    }
  }
  .video_review_section {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  .bootcamp_video_reviews_section {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    width: 300px !important;
    height: auto;
    justify-content: center;
    padding-bottom: 20px;

    @media (min-width: 1129px) {
      width: 240px;
    }
    @media (min-width: 1364px) {
      width: 300px;
    }
    @media (min-width: 1600px) {
      width: 360px;
    }

    @media (min-width: 1800px) {
      width: 390px;
    }
    @media (min-width: 1900px) {
      width: 420px;
    }
    @media (min-width: 1930px) {
      width: 300px;
    }
    @media (max-width: 1130px) {
      width: 100%;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0px;
  }

  p {
    font-weight: 500;
    font-size: 13px;
  }
  a {
    margin-top: 10px;
  }
  .text {
    width: 100%;
    height: auto;
    outline: none;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    margin-top: 3%;
    .news_image {
      display: block;
      .gatsby-image-wrapper {
        width: 100%;
        border-radius: 6px;
      }
    }
  }
  @media (max-width: 767px) {
    .text {
      width: 435px;
      padding-bottom: 50px;
    }
  }

  @media (max-width: 479px) {
    .text {
      width: 100% !important;
      margin-top: 4%;
    }
  }
  h4 {
    font-weight: 500;
  }
  h5 {
    font-weight: 600;
    margin: 0px;
  }
  .connect_to_discord {
    display: flex;
    flex-direction: row;
    align-items: center;
    .discord_link {
      min-width: 150px;
      padding: 15px;
      background-color: var(--thirdColor);
      color: var(--secondaryColor);
      outline: none;
      border-radius: 6px;
      text-decoration: none;
    }
  }
  #happyFace {
    background-color: var(--secondaryColor) !important;
    width: 50% !important;

    @media (max-width: 479px) {
      width: 80% !important;
    }
    img {
      width: 100%;
    }
    p {
      padding: 10px 5px;
    }
    li {
      padding: 10px 5px;
    }
  }
`
const SelectDay = styled(FormControl)``
const NativeSelection = styled(NativeSelect)``
