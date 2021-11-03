import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import trending from "../../images/trending 2.svg"
import StarRatings from "react-star-ratings"
import arrow from "../../images/Vector 58.svg"
import arrow1 from "../../images/Vector 55.svg"
import Fade from "react-reveal/Fade"
import { GatsbyImage } from "gatsby-plugin-image"

import AlltrendingMobile from "./AlltrendingMobile"
import HeadingBorderAnim from "../HeadingBorderAnim"

function AllTrendingCertificte() {
  const [value, setValue] = React.useState("popular course")
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])
  const data = useStaticQuery(graphql`
    {
      allStrapiAllTrendingCertifications(sort : {fields: id}) {
        nodes {
          main_title
          icon {
            url
          }
          course_description {
            users_count
            logos {
              technologyStack_media {
                url
              }
              id
            }
            author {
              author_image {
                url
              }
              name
            }
            duration_and_mode
            event_date
            id
            popular_course
            rating
            slug
            title
            course_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: TRACED_SVG
                    layout: FULL_WIDTH
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div className="alltrending_heading">
        <HeadingBorderAnim>trending certification</HeadingBorderAnim>
      </div>
      {/* <div className="alltrending_sub_heading">
        <h2>Check Out our Courses</h2>
      </div> */}
      <div className="alltrending_wrapper">
        <div className="alltrending_right_section_topics">
          <button
            className={`topics_icon_wrapper ${
              value === "popular course" && "active-btn"
            }`}
            onClick={() => setValue("popular course")}
          >
            <div className="icon">
              <img
                className="icons_img"
                src={trending}
                alt="certificate popular course"
              />
            </div>
            <div className="topic">
              <h4>popular course</h4>
            </div>
            <div className="arrow_icon">
              <img
                className="arrow"
                src={arrow}
                alt="certificate popular course"
              />
            </div>
          </button>
          {data.allStrapiAllTrendingCertifications.nodes.map((d) => (
            <>
              <button
                className={`topics_icon_wrapper ${
                  value === d.main_title && "active-btn"
                }`}
                onClick={() => setValue(`${d.main_title}`)}
              >
                <div className="icon">
                  <img src={d.icon.url} alt="certificate popular course" />
                </div>
                <div className="topic">
                  <h4>{d.main_title}</h4>
                </div>
                <div className="arrow_icon">
                  <img src={arrow} alt="certificate popular course" />
                </div>
              </button>
            </>
          ))}
        </div>
        <div className="alltrending_left_section_topics">
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            {data.allStrapiAllTrendingCertifications.nodes.map((d) =>
              d.course_description.map((l) => {
                return (
                  <>
                    {value === "popular course" && l.popular_course && (
                      <div className="trending_certification_posts_section">
                        <div className="certificate_image">
                          <GatsbyImage
                            image={
                              l.course_image.localFile.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Certisured Home Banner"
                          />
                        </div>
                        <div className="details_wrapper_wrapper">
                          <div className="details_wrapper">
                            <div className="details_desc_section">
                              <div className="author_certificate_title">
                                <div className="cert_title">
                                  <h3>{l.title}</h3>
                                </div>
                                {/* <div className="author_profile">
                                <img
                                  className="author"
                                  src={l.author.author_image[0].url}
                                  alt={l.title}
                                />
                              </div> */}
                              </div>
                            </div>
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
                    )}

                    {/* this is another section */}
                    {value === d.main_title && (
                      <div className="trending_certification_posts_section">
                        <div className="certificate_image">
                          <GatsbyImage
                            image={
                              l.course_image.localFile.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Certisured Home Banner"
                          />
                        </div>
                        <div className="details_wrapper_wrapper">
                          <div className="details_wrapper">
                            <div className="details_desc_section">
                              <div className="author_certificate_title">
                                <div className="cert_title">
                                  <h3>{l.title}</h3>
                                </div>
                                {/* <div className="author_profile">
                                 <img
                                   className="author"
                                   src={l.author.author_image[0].url}
                                   alt={l.title}
                                 />
                               </div> */}
                              </div>
                            </div>
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
                                        alt="partners logo"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
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
                    )}
                  </>
                )
              })
            )}
          </Fade>
        </div>
      </div>
      <div className="main_alltrending_wrapper">
        <div className="alltrending_mobile_tablet_section">
          <AlltrendingMobile
            data={data.allStrapiAllTrendingCertifications.nodes}
            value={value}
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default AllTrendingCertificte

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  height: auto;
  width: 100%;
  height: auto;
  align-items: center;
  @media (min-width: 1930px) {
    width: 80%;
  }
  @media (max-width: 479px) {
    padding-bottom: 0px;
  }
  h5 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 0px;
    color: var(--secondaryColor);
    @media (max-width: 479px) {
      text-align: center;
    }
  }
  .alltrending_heading {
    grid-area: 1/2/2/11;
    @media (min-width: 1930px) {
      grid-area: 1/1/2/12;
    }
    @media (max-width: 479px) {
      grid-area: 1/2/2/11;
      display: flex;
      justify-content: flex-start;
    }
  }
  .alltrending_sub_heading {
    grid-area: 2/2/3/11;
  }

  .alltrending_wrapper {
    grid-area: 3/2/4/11;
    display: grid;
    grid-template-columns: 22% auto;
    height: auto;
    margin-top: 3%;
    @media (max-width: 1300px) {
      display: none;
    }
    @media (min-width: 1930px) {
      grid-area: 3/1/4/12;
    }
  }
  .main_alltrending_wrapper {
    display: flex;
    grid-area: 3/1/4/12;
    margin-top: 4%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .alltrending_mobile_tablet_section {
    display: none;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1300px) {
      display: flex;
      padding: 0 15px;
      width: 80%;
    }
    @media (max-width: 525px) {
      display: flex;
      padding: 0 15px;
      width: 100%;
    }
  }
  .alltrending_right_section_topics {
    display: flex;
    flex-direction: column;
  }
  .certificate_image {
    width: 370px;
    overflow: hidden;
    border-radius: 6px;
  }
  .topics_icon_wrapper {
    display: grid;
    grid-template-columns: 40px auto auto;

    background: #f1f1f1;
    box-shadow: 0px 2.95704px 5.91409px rgba(0, 0, 0, 0.25);
    border-radius: 5.6512px;
    width: auto;
    height: auto;
    margin: 10px 0;
    border: none;
    outline: none;
    padding: 0 10px;
    place-items: center;
    cursor: pointer;
  }
  .topic {
    display: flex;
    width: 100%;
    padding: 0 2px 0 10px;
  }
  .arrow_icon {
    display: grid;
    height: 20px;
    width: 100%;
    justify-content: flex-end;
  }
  .topics_icon_wrapper1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    box-shadow: 0px 2.95704px 5.91409px rgba(0, 0, 0, 0.25);
    border-radius: 5.6512px;
    width: auto;
    height: auto;
    border: none;
    outline: none;
  }
  .topics_icon_wrapper.active-btn {
    background-color: var(--thirdColor);
  }
  .topics_icon_wrapper1.active-btn {
    background-color: var(--thirdColor);
  }
  h4 {
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
  .alltrending_left_section_topics {
    display: flex;
    flex-direction: column;
    padding-top: 11px;
    /* background: #f1f1f1; */
    margin-left: 65px;
    /* box-shadow: 0px 2.95704px 5.91409px rgba(0, 0, 0, 0.25); */

    overflow-y: auto;
    /* @media (max-width: 1500px){
        grid-area: auto/4/auto/12;

    } */
  }
  .trending_certification_posts_section {
    width: auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 35px;
    box-shadow: 0px 7.9059px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-bottom: 20px;
    height: 240px;
    @media (max-width: 1425px) {
      min-height: 240px;
      height: auto;
    }
  }
  .arrow {
    width: 100%;
    height: 100%;
  }
  .icon {
    width: 50px;
    height: 50px;
    display: flex;
    margin: 10px 0;
    .icons_img {
      width: 50px;
    }
    @media (max-width: 479px) {
      margin: 0px;
    }
  }
  .author {
    width: 47.67px;
    height: 47.67px;
    border-radius: 50%;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 0px;
  }
  .author_certificate_title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .certi_programs {
    border-radius: 6px;
  }
  h6 {
    margin: 5px 0px;
    font-weight: 500;
    font-size: 14px;
  }
  .details_wrapper_wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #f1f1f1;
    border-radius: 6px;
  }
  .details_wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
  }
  .course_link {
    display: flex;
    @media (max-width: 479px) {
      align-items: center;
    }
  }
  .in_association_with_section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
  }
  .partners_logo_section {
    display: flex;
    flex-direction: row;
  }
  .partners_logo {
    width: 50px;
    height: 50px;
    padding: 0 2px;
  }
  .learn_more_icon {
    color: var(--thirdColor);
    width: 23px;
    height: 23px;
    @media (max-width: 479px) {
      width: 12px;
      height: 12px;
      margin-top: 2px;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    @media (max-width: 479px) {
      font-size: 11px;
    }
  }
  .ratings_wrapper {
    display: flex;
    align-items: center;
  }
  span {
    font-size: 12px;
  }
`
