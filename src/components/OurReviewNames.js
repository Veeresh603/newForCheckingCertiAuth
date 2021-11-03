import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import ReactMarkdown from "react-markdown"
import linkedin from "../images/linkedin.svg"
// Import css files

function OurWork(props) {
  const { data } = props
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
      </div>

      <Slider {...settings}>
        {data.map((d) => {
          return (
            <div className="first" key={d.id}>
              {!d.review_image ? (
                <img src={d.consulting_media[0].url} alt="" />
              ) : (
                <img src={d.review_image.url} alt="" />
              )}

              <div className="text">
                <div className="text_section">
                  <ReactMarkdown>{d.descrption}</ReactMarkdown>
                  <h3>{!d.name ? d.title : d.name}</h3>
                  <h6>{!d.company ? "company name" : d.company}</h6>
                  <a
                    href={
                      !d.slug
                        ? !d.linkedIn_url
                          ? "https://certisured.com/"
                          : d.linkedIn_url
                        : d.slug
                    }
                  >
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={linkedin}
                      alt={!d.name ? d.title : d.name}
                    />
                  </a>
                </div>
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
  width: 100%;
  height: auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 479px) {
    width: 100%;
    padding: 20px 0;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  .first {
    width: 400px;
    height: auto;
    outline: none;
    padding: 15px;
    border-radius: 6px;
    background-color: var(--secondaryColor);
    @media (max-width: 479px) {
      /* width:400px !important; */
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
  .first:hover {
    h4 {
      background-color: var(--primaryColor);
      color: var(--secondaryColor);
      transition: 0.5s ease-in-out;
    }
  }
  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .slick-slide img {
    margin: auto;
    align-self: center;
  }
  .slick-slide {
    margin-right: 20px;
    @media (max-width: 479px) {
      margin-right: 0px;
    }
  }
  .slick-slider {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
  }
  .slick-list {
    grid-area: 1/2/2/11;
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
    grid-area: 1/10/2/11;
  }
  .slick-prev {
    left: 0;
    z-index: 1;
    width: auto;
    height: auto;
    grid-area: 1/2/2/4;
  }
  p {
    color: var(--secondaryColor);
    font-size: 13px;
    text-align: center;
  }
  .text_section {
    width: 95%;
    margin-top: -11px;
    padding: 20px;
    background-color: #f1f1f1;
  }
  h3 {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0;
  }
  h6 {
    margin: 0;
    padding: 10px;
    letter-spacing: 2px;
    font-weight: 400;
    text-align: center;
  }
`
