import React from "react"
import styled from "styled-components"
import "swiper/css/swiper.css"
import Slider from "react-slick"
import { Link } from "gatsby"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function OurWork(props) {
  const { data, num } = props
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

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
    <Wrapper style={!props.style ? null : props.style}>
      

        <Slider {...settings}>
          {data.map(d => {

            return (
              <div className="first" key={d.id}>
                  <img src={d.first_image.publicURL} alt="" />
                
                <div className="text">
                    <h4>{d.firstImageTitle}</h4>
                
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
  height: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 479px) {
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  .first {
    width: 370px;
    height: auto;
    outline: none;
    @media (max-width: 479px) {
      /* width:400px !important; */
    }
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
  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
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
    border-radius: 6px;
    text-align: justify;
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
  h3 {
    font-size: 12px;
  }
  .slick-slide img {
    margin: auto;
    align-self: center;
  }
  .slick-slide {
    @media (max-width: 479px) {
      margin-right: 0px;
    }
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
  .bg__header {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0.7; */
    @media (max-width: 991px) {
      height: 300px;
    }
    @media (max-width: 479px) {
      height: 380px;
    }
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
