import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlineArrowLeft } from "react-icons/ai"
import StarRatings from "react-star-ratings"
import ReactMarkdown from "react-markdown"
import linkedin from "../images/linkedin.svg"
import Fade from "react-reveal/Fade"

function NewReview(props) {
  const { data } = props
  const imagesLength = data.length
  const imageEnd = imagesLength - 1
  const [imageIndex, setImageIndex] = useState(1)
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
      <div className="heading">
        <h2 className="borderLeftRight">{props.title}</h2>
      </div>
      <div className="main_testimonial_wrapper">
        <div className="left_section">
          {data.map((d, id) => (
            <div
              id={
                id === imageIndex
                  ? "active"
                  : id % 2 === 0
                  ? "prev"
                  : id % 2 !== 0
                  ? "next"
                  : "not"
              }
              className="testimonial_images"
              style={{
                backgroundImage: `url(${d.review_image.publicURL})`,
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
                  ? setImageIndex(1)
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
                  rating={4.3}
                  starDimension="30px"
                  starSpacing="3px"
                  starRatedColor="#FFD400"
                />
              </div>
              <div className="review_text">
                <ReactMarkdown>{data[imageIndex].descrption}</ReactMarkdown>
              </div>
              <div className="review_name">
                <h4>{data[imageIndex].name}</h4>
                <h5>{data[imageIndex].company}</h5>
              </div>
              <div className="linkedin_icon">
                <a href={data[imageIndex].slug}>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={linkedin}
                    alt={data[imageIndex].slug}
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
  padding: 100px 0;
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
    padding-top: 50px;
  }
  h2 {
    color: var(--primaryColor);
    font-size: 25px;
    font-weight: 900;
    margin-bottom: 25px;
    width: auto;
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
