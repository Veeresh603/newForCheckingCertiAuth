import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// Import css files
import loadable from "@loadable/component"

import StarRatings from "react-star-ratings"
import arrow1 from "../../images/Vector 55.svg"
const Slider = loadable(() => import("../helper/react-slick"))

function AlltrendingCarousel(props) {
  const { data } = props
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    pauseOnHover: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 2,
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
      {props.popular ? (
        <Slider {...settings}>
          {data.map((d) =>
            d.course_description.map((l) => {
              return (
                props.expanded === "popular course" &&
                l.popular_course && (
                  <div className="first">
                    <div className="trending_certificate_mobile_wrapper">
                      <div className="trending_certificate_mobile_banner">
                        <GatsbyImage
                          image={l.course_image.localFile.childImageSharp.gatsbyImageData}
                          alt="Certisured Home Banner"
                        />
                      </div>
                    </div>
                    <div className="course_certification_details">
                      <h3>{l.title}</h3>
                      <h6>{l.duration_and_mode}</h6>
                      <h6 style={{ fontSize: "14px" }}>{l.event_date}</h6>
                      <div className="ratings_wrapper">
                        <StarRatings
                          rating={l.rating}
                          starDimension="25px"
                          starSpacing="3px"
                          starRatedColor="#FFD400"
                        />
                        <span style={{ marginLeft: "5px", fontWeight: "400" }}>
                          {l.rating}
                        </span>
                        <span style={{ marginLeft: "2px", fontWeight: "500" }}>
                          ({l.users_count})
                        </span>
                      </div>
                      <h4
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          textAlign: "unset",
                          marginBottom: "0px",
                        }}
                      >
                        In Association with
                      </h4>
                      <div className="in_association_with_section">
                        <div className="partners_logo_section">
                          <div className="partners_logo_section">
                            {l.logos.map((logo) => (
                              <div className="partners_logo" key={l.id}>
                                <img
                                  className="partners"
                                  style={{ width: "100%", height: "100%" }}
                                  src={logo.technologyStack_media.url}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="course_link">
                          <Link to={l.slug}>
                            <div
                              style={{
                                width: "auto",
                                height: "auto",
                                backgroundColor: "var(--secondaryColor)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "8px",
                                borderRadius: "3px",
                              }}
                            >
                              Learn More
                              <img
                                className="learn_more_icon"
                                src={arrow1}
                                alt="arrow"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            })
          )}
        </Slider>
      ) : (
        <Slider {...settings}>
          {data.map((d) =>
            d.course_description.map((l) => {
              return (
                props.expanded === d.main_title && (
                  <div className="first">
                    <div className="trending_certificate_mobile_wrapper">
                      <div className="trending_certificate_mobile_banner">
                        <GatsbyImage
                          image={l.course_image.localFile.childImageSharp.gatsbyImageData}
                          alt="Certisured Home Banner"
                        />
                      </div>
                      <div className="course_certification_details">
                        <h3>{l.title}</h3>
                        <h6>{l.duration_and_mode}</h6>
                        <h6 style={{ fontSize: "14px" }}>{l.event_date}</h6>
                        <div className="ratings_wrapper">
                          <StarRatings
                            rating={l.rating}
                            starDimension="25px"
                            starSpacing="3px"
                            starRatedColor="#FFD400"
                          />
                          <span
                            style={{ marginLeft: "5px", fontWeight: "400" }}
                          >
                            {l.rating}
                          </span>
                          <span
                            style={{ marginLeft: "2px", fontWeight: "500" }}
                          >
                            ({l.users_count})
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: "15px",
                            fontWeight: "400",
                            textAlign: "unset",
                            marginBottom: "0px",
                          }}
                        >
                          In Association with{" "}
                        </h4>
                        <div className="in_association_with_section">
                          <div className="partners_logo_section">
                            <div className="partners_logo_section">
                              {l.logos.map((logo) => (
                                <div className="partners_logo" key={l.id}>
                                  <img
                                    className="partners"
                                    src={logo.technologyStack_media.url}
                                    alt=""
                                    style={{ width: "100%", height: "100%" }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="course_link">
                            <Link to={l.slug}>
                              <div
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  backgroundColor: "var(--secondaryColor)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "8px",
                                  borderRadius: "3px",
                                }}
                              >
                                Learn More
                                <img
                                  className="learn_more_icon"
                                  src={arrow1}
                                  alt="arrow"
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            })
          )}
        </Slider>
      )}
    </Wrapper>
  )
}

export default AlltrendingCarousel

const Wrapper = styled.div`
  .first {
    width: auto;
    height: auto;
    outline: none;
    padding: 15px;
    border-radius: 6px;
    @media (max-width: 479px) {
      padding: 0px;
    }
  }

  .slick-slide img {
    margin: auto;
    align-self: center;
  }
  .slick-slide {
    margin-right: 0px;
    @media (max-width: 479px) {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
  .slick-slider {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
  }
  .slick-list {
    grid-area: 1/1/2/12;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-prev::before,
  .slick-next::before {
    color: var(--primaryColor);
    font-size: 40px;
  }
  .slick-next {
    display: none !important;
    right: 0;
    width: auto;
    height: auto;
    grid-area: 1/11/2/12;
  }
  .slick-prev {
    display: none !important;

    left: 0;
    z-index: 1;
    width: auto;
    height: auto;
    grid-area: 1/1/2/2;
  }
  .trending_certificate_mobile_wrapper {
    display: flex;
    flex-direction: column;
    height: auto;
    @media (max-width: 479px) {
      height: auto;
    }
  }
  .trending_certificate_mobile_banner {
    display: flex;
    height: 200px;
    @media (max-width: 479px) {
      height: auto;
    }
  }
`
