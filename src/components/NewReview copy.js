import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight"
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft"
import StarRatings from "react-star-ratings"
import ReactMarkdown from "react-markdown"
import linkedin from "../images/linkedin.svg"
import Fade from "react-reveal/Fade"
import HeadingBorderAnim from "./HeadingBorderAnim"

function NewReview(props) {
  const { data } = props
  const imagesLength = data.allreview.length
  const imageEnd = imagesLength - 1
  const [imageIndex, setImageIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <Wrapper>
      {props.home && (
        <div className="heading">
          <HeadingBorderAnim className="borderLeftRight">
            what students say
          </HeadingBorderAnim>
        </div>
      )}
      <div className="main_testimonial_wrapper">
        <div className="left_section">
          {data.allreview.map((d, id) => (
            <div
              id={
                id === imageIndex
                  ? "active"
                  : id === imageIndex + 1
                  ? "prev"
                  : "next"
              }
              className="testimonial_images"
              style={{
                backgroundImage: `url(${d.picture[0].url})`,
              }}
            ></div>
          ))}
        </div>
        <div className="button_section">
          <div className="prev_button">
            <AiOutlineArrowLeft
              onClick={() =>
                imageIndex <= 0
                  ? setImageIndex(imagesLength - 1)
                  : setImageIndex(imageIndex - 1)
              }
              className="left_icon"
            />
          </div>
          <div className="next_button">
            <AiOutlineArrowRight
              onClick={() =>
                imageIndex === imageEnd
                  ? setImageIndex(0)
                  : setImageIndex(imageIndex + 1)
              }
              className="right_icon"
            />
          </div>
        </div>
        <div className="right_section">
          <div className="right_section_review">
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={500}
              distance="30px"
            >
              <div className="star_rating">
                <StarRatings
                  rating={data.allreview[imageIndex].rating}
                  starDimension="30px"
                  starSpacing="3px"
                  starRatedColor="#FFD400"
                />
              </div>
              <div className="review_text">
                <ReactMarkdown>
                  {data.allreview[imageIndex].descrption}
                </ReactMarkdown>
              </div>
              <div className="review_name">
                <h4>{data.allreview[imageIndex].name}</h4>
                <h5>{data.allreview[imageIndex].company}</h5>
              </div>
              <div className="linkedin_icon">
                <a href={data.allreview[imageIndex].linkedInUrl}>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={linkedin}
                    alt={data.allreview[imageIndex].linkedInUrl}
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default NewReview

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  .heading {
    grid-area: 1/2/2/11;
  }
  .main_testimonial_wrapper {
    grid-area: 2/1/3/12;
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 420px auto;
    margin-top: 4%;
    /* padding-top: 50px; */
  }

  .left_section {
    grid-area: 1/2/2/6;
    display: flex;
    justify-content: center;
  }
  .testimonial_images {
    width: 360px;
    height: 400px;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.5s ease-in-out;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.29);
    border-radius: 10px;
    background-position: center;
  }
  .button_section {
    grid-area: 2/2/3/6;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  /* img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  } */
  #active {
    z-index: 99;
    opacity: 1;
    transform: translateX(0);
  }
  #next {
    transform: translateX(85px) scale(0.8);
    transition: all 0.5s ease;
    opacity: 1;
    z-index: 1;
  }
  #prev {
    transform: translateX(-85px) scale(0.8);
    transition: all 0.5s ease;
    opacity: 1;
    z-index: 1;
  }
  .right_icon,
  .left_icon {
    font-size: 30px;
    color: var(--secondaryColor);
    cursor: pointer;
  }
  .next_button {
    margin-left: 30px;
  }
  .right_section {
    grid-area: 1/6/2/11;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
  }
  h4 {
    color: var(--secondaryColor);
    font-weight: 600;
    font-size: 20px;
    margin: 0;
  }
  h5 {
    margin-top: 5px;
    font-weight: 600;
  }
  .review_name {
    border-bottom: 1px solid #d7d7d7;
  }
  .linkedin_icon {
    margin-top: 10px;
  }
  p {
    text-align: left;
    font-size: 22px;
    font-weight: 300;
    color: #191d38;
  }
`
