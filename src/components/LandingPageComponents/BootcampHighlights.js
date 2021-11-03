import React from "react"
import styled from "styled-components"
import shield from "../../images/sheild.svg"
import Slider from "react-slick"

// Import css files

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
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
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

function BootcampHighlights({ data }) {
  return (
    <Wrapper>
      <div className="bootcamp_high_light_section_heading">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>

      <Slider {...settings}>
        {data.highlights_desc.map((d) => {
          return (
            <section>
              <div className="bootcamp_high_light_box" key={d.id}>
                <p>{d.main_heading}</p>
              </div>
            </section>
          )
        })}
      </Slider>
    </Wrapper>
  )
}

export default BootcampHighlights

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  margin-top: 100px;
  span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  .bootcamp_high_light_section_heading {
    grid-area: 1/2/2/11;
  }
  .bootcamp_high_light_section {
    grid-area: 2/2/3/11;
    display: flex;
    flex-direction: column;
  }
  .bootcamp_high_light_box_section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .bootcamp_high_light_box {
    display: flex !important;
    flex-direction: column;
    width: calc(100% - 20px);
    min-height: 150px;
    background: linear-gradient(103.81deg, #6f62df 0.66%, #002f54 98.15%);
    box-shadow: 0px 1.47178px 7.35892px rgba(0, 0, 0, 0.25);
    border-radius: 18.3973px;
    padding: 20px;
    p {
      color: #fff !important;
    }
    @media (max-width: 767px) {
      margin-top: 20px;
      min-height: 50px;
    }
  }
  /* div > .bootcamp_high_light_box :nth-child(odd){
      height:300px;
  } */
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
  #bootcamp_high_light_box_height {
    height: 225px;
  }
  .bootcamp_icon {
    width: 40px;
    height: 40px;
    color: #fff;
    fill: var(--secondaryColor);
    margin-left: -8px;
    @media (max-width: 767px) {
      width: 35px;
      height: 35px;
    }
  }
  .slick-slider {
    grid-area: 2/1/3/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
  }
  .slick-list {
    grid-area: 1/2/2/11;
  }
  .slick-slide {
    margin-right: 20px;
    margin-bottom: 20px;

    @media (max-width: 479px) {
      margin-right: 0px;
    }
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  section {
    @media (max-width: 767px) {
      display: flex !important;
      justify-content: center;
      align-items: center;
    }
  }
`
