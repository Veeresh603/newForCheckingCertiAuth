import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import loadable from "@loadable/component"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"
import { Link } from "gatsby"
import HeadingBorderAnim from "./HeadingBorderAnim"

const Slider = loadable(() => import("./helper/react-slick"))

function LatestNews(props) {
  const slider = React.useRef(null)
  var settings = {
    infinite: true,
    pauseOnHover: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <LeftArrow
        slider={slider}
        main="main_left_wrapper"
        className="arrow_left"
      />
    ),
    prevArrow: <RightArrow slider={slider} right="7%" mobRight="5%" />,

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
    <Wrapper>
      <div className="latest_news_section">
        <div className="latest_news_heading">
          <HeadingBorderAnim>{props.news.title}</HeadingBorderAnim>
        </div>
        <Slider {...settings} ref={slider}>
          {props.news.newsupdate.map((d) => {
            return (
              <Link className="link_news" to={d.link_to}>
                <div className="latest_news_section_inner_section">
                  <div className="latest_news_section_image">
                    <GatsbyImage
                      image={
                        d.news_update_image.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt="upcoming events certisured"
                    />
                  </div>
                  <div className="latest_news_section_desc">
                    <div className="starts_at">
                      {!d.show_date_and_time && <h5>{d.starts_at}</h5>}
                    </div>
                    <Link to={d.link_to}>Learn More</Link>
                  </div>
                </div>
              </Link>
            )
          })}
        </Slider>
      </div>
    </Wrapper>
  )
}

export default LatestNews

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  width: 100%;
  height: auto;

  .latest_news_section {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    width: 100%;
  }
  .latest_news_heading {
    grid-area: 1/2/2/11;
    @media (max-width: 479px) {
      display: flex;
      justify-content: flex-start;
    }
  }
  .slick-slide img {
    margin: auto;
    align-self: center;
  }
  .slick-slide {
    /* margin-right: 20px; */
    margin: 0 30px;
    @media (max-width: 479px) {
      margin-right: 8px;
      margin-left: 8px;
    }
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-slider {
    grid-area: 2/1/3/12;

    display: grid;
    grid-template-columns: repeat(11, 1fr);
    margin-top: 3%;

    @media (max-width: 479px) {
      margin-top: 4%;
    }
  }
  .slick-list {
    grid-area: 1/2/2/11;
  }

  // buttons

  .main_left_wrapper {
    right: 7%;

    @media (max-width: 479px) {
      right: 5%;
      top: 41%;
    }
  }
  .main_right_wrapper {
    left: 7%;
    @media (max-width: 479px) {
      left: 5%;
      top: 41%;
    }
  }

  //buttons

  .latest_news_section_inner_section {
    display: flex;
    flex-direction: column;
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); */
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 100% !important;
    position: relative;
    @media (max-width: 479px) {
      margin: 0px 0px;
    }
  }
  .latest_news_section_image {
    display: block;
    height: auto;
    @media (max-width: 479px) {
      height: auto;
    }
    .gatsby-image-wrapper {
      width: 100%;
      border-radius: 15px;

      @media (max-width: 479px) {
        height: auto;
      }
    }
  }
  /* .latest_news_section_inner_section::before {
    position: absolute;
    background-color: #f5f4fd;
    width: 100%;
    top: 0;
    left: 0;
  }
  .latest_news_section_inner_section::after {
    content: "";
    position: absolute;
    right: 0;
    width: 150px;
    height: 49px;
    bottom: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  } */
  .latest_news_section_desc {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 25px 20px;
    height: auto;
    align-items: center;
    position: absolute;
    width: 100%;
    background-color: transparent;
    justify-content: space-between;
    bottom: 0;
    right: 0;

    p {
      margin: 25px 0 !important;
    }
    a {
      width: auto;
      background-color: transparent;
      color: var(--thirdColor);
      text-decoration: none;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      @media (max-width: 479px) {
        padding: 0;
        font-size: 12px;
      }
    }
    a::after {
      content: "";
      width: 10px;
      height: 10px;
      background-color: transparent;
      border-radius: 1px solid var(--thirdColor);
      display: block;
      /* transform: translateY(-50px); */
      transform: rotate(-45deg);
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transition: all 0.2s ease-in-out;
    }
    a:hover::after {
      transform: rotate(-45deg) scale(1.4);
    }
    .starts_at {
      h5 {
        font-weight: 600;
        color: var(--thirdColor);
        margin: 0;
        font-size: 13px;
      }
    }
  }
`
