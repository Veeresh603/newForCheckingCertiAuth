import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

function OurWork(props) {
  const { data } = props
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <Wrapper style={!props.style ? null : props.style}>
      <div className="grid_section">
        <div className="heading">
          <h2 className="borderLeftRight">{props.title}</h2>
        </div>
        {data.technologyStack_media.length < 5 && (
          <div className="wrapper_wrapper">
            {data.technologyStack_media.map((d) => {
              return (
                <div className="first_1" key={d.id}>
                  <img
                    src={d.technologyStack_media.url}
                    alt="technology stack"
                  />
                </div>
              )
            })}
          </div>
        )}
        {data.technologyStack_media.length >= 5 && <Slider {...settings}>
          {data.technologyStack_media.map((d) => {
            return (
              <div className="first" key={d.id}>
                <img src={d.technologyStack_media.url} alt="technology stack" />
              </div>
            )
          })}
        </Slider>}
      </div>
    </Wrapper>
  )
}

export default OurWork

const Wrapper = styled.div`
  /* margin-top:100px; */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 479px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    margin: 0px;
  }
  .first {
    width: 150px !important;
    height: auto;
    @media (max-width: 479px) {
      width: auto !important;
    }
  }
  .wrapper_wrapper {
    grid-area: 2/2/3/11;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .first_1 {
    width: 150px !important;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 479px) {
      width: 150px !important;
    }
  }
  img {
    @media (max-width: 479px) {
      width: 80% !important;
    }
  }
  .first:hover {
    h4 {
      background-color: var(--primaryColor);
      color: white;
      transition: 0.5s ease-in-out;
    }
  }
  .slick-slider {
    grid-area: 2/2/3/11;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    @media (max-width: 479px) {
      grid-area: 2/1/3/12;
    }
  }
  .slick-list {
    grid-area: 1/1/2/12;
  }
  .text {
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-end;
  }
  /* img {
    width: 100%;
    height: auto;
  } */
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
  .grid_section {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
  }
  .carousel_section {
    grid-area: 2/2/3/11;
  }
  .heading {
    width: auto;
    grid-area: 1/2/2/11;
    @media (max-width: 479px) {
      display: flex;
      justify-content: center;
    }
  }

  h2 {
    color: var(--primaryColor);
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 25px;
    width: auto;
    text-transform: lowercase;
  }
  h3 {
    font-size: 12px;
  }
  .slick-slide img {
    margin: auto;
    align-self: center;
    width: 145px;
  }
  .slick-slide {
    margin-left: 0px;
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
`
