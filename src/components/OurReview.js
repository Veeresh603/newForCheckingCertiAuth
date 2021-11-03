import React from "react"
import styled from "styled-components"
import loadable from "@loadable/component"

const Slider = loadable(() => import("./helper/react-slick"))

// Import css files


function OurWork(props) {
  const { data } = props
  var settings = {
    dots: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <Wrapper style={!props.style ? null : props.style}>
      <div className="heading">
        <h2 className="borderLeftRight">{props.title}</h2>
      </div>

      <Slider {...settings}>
        {data.map(d => {
          return (
            <div className="first" key={d.id}>
              <h3>{d.title}</h3>
              <div className="banner_section">
                <iframe
                  title="message from instructor"
                  className="bg__header"
                  src={d.Youtube_url}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </div>
              <div className="text">
                <h4>{d.name}</h4>
              </div>
            </div>
          )
        })}
      </Slider>
    </Wrapper>
  )
}

export default OurWork

const Wrapper = styled.div`
  /* margin-top:100px; */
  width: 90%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 479px) {
    width: 100%;
    /* padding: 20px; */
  }
  @media (max-width: 767px) {
    margin: 0px;
  }
  .first {
    width: 370px;
    height: auto;
    @media (max-width: 479px) {
      /* width:400px !important; */
    }
  }
  .banner_section {
    background-color: gray;
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
  .first:hover {
    h4 {
      background-color: var(--primaryColor);
      color: var(--secondaryColor);
      transition: 0.5s ease-in-out;
    }
  }
  .text {
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-end;
  }
  .slick-slide {
    margin-right: 20px;
    @media (max-width: 479px) {
      margin-right: 0px !important;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  h4 {
    width: 90%;
    background-color: #f8f8f8;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    color: #111111;
    height: auto;
    padding: 20px;
    margin-top: -25px;
    font-size: 12px;
    z-index: 1;
    font-weight: 400;
    @media (max-width: 991px) {
      width: 90%;
      font-size: 10px;
      height: auto;
    }
  }
  .heading {
    width: auto;
  }
  h2 {
    color: var(--primaryColor);
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 25px;
    width: auto;
  }
  .video_player {
    width: 100%;
    height: 300px;
    @media (max-width: 479px) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  h3 {
    font-size: 12px;
  }
  .slick-slide img {
    margin: auto;
    align-self: center;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
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
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  a {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    outline: none;
  }

  .slick-prev::before,
  .slick-next::before {
    color: var(--primaryColor);
    font-size: 40px;
  }
  .slick-next {
    right: 0;
    width: auto;
    height: auto;
  }
  .slick-prev {
    left: 0;
    z-index: 1;
    width: auto;
    height: auto;
  }
`
