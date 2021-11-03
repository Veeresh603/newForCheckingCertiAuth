import React from "react"
import loadable from "@loadable/component"

import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"

// Import css files

const Slider = loadable(() => import("./helper/react-slick"))

export default function CustomAccordion(props) {
  const { data } = props
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerPadding: "10px",

    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Wrapper>
      <Slider {...settings}>
        {props.data.map((d) => {
          return (
            <div className="text">
              <div className="news_image">
                <GatsbyImage
                  image={d.news_update_image.childImageSharp.gatsbyImageData}
                />
              </div>
              <ReactMarkdown>{d.news_descrption}</ReactMarkdown>
            </div>
          )
        })}
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 479px) {
    width: 100%;
    min-height: 640px;
  }
  .text {
    width: 370px;
    height: auto;
    outline: none;
  }
  .slick-slide img {
    width: 100%;
    border-radius: 6px;
    @media (max-width: 479px) {
      object-fit: contain;
    }
  }
  p {
    font-weight: 400;
  }
  a {
    width: auto;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    @media (max-width: 479px) {
      padding: 12px 30px;
      font-size: 14px;
    }
  }
  a:hover {
    background-color: var(--purpleColor);
    color: #fff;
  }
  h6 {
    font-weight: 400;
    font-size: 18px;
  }
`
