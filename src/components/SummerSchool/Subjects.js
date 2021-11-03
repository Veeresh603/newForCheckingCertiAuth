import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import linkedin from "../../images/linkedin.svg"
import { Link } from "gatsby"

function Subjects(props) {
  const { data } = props
  return (
    <Wrapper>
      <div className="topic">
        <h2
          style={{
            color: "var(--secondaryColor) !important",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Subjects
        </h2>
      </div>
      <div className="inner_grid">
        {data.map((d) => {
          return (
            <>
              <div className="left_right_wrapper">
                <div className="heading">
                  <h2 style={{ fontSize: "32px", color: "#000 !important" }}>
                    {d.title}
                  </h2>
                </div>
                <div className="left_section_wrapper">
                  {!d.video_into_url ? (
                    d.subject_pic[0] && (
                      <div
                        className="left_section"
                        style={{
                          backgroundImage: `url(${d.subject_pic[0].url})`,
                        }}
                      ></div>
                    )
                  ) : (
                    <lite-youtube
                      style={{ borderRadius: "6px" }}
                      params="controls=0&enablejsapi=1"
                      videoplay="Mirar"
                      videoid={d.video_into_url}
                    ></lite-youtube>
                  )}
                  <div className="instructor">
                    <div className="instructor_heading">
                      <h4>Instructor</h4>
                    </div>
                    <div className="instructor_section">
                      <img
                        className="profile_photo"
                        src={d.instructor.instructor_pic[0].url}
                        alt=""
                      />
                      <div className="instructor_info">
                        <h4>{d.instructor.name}</h4>
                        <h5 style={{ marginTop: "-30px" }}>
                          {d.instructor.designation}
                        </h5>
                      </div>
                      <div className="instructor_link">
                        <a href={d.instructor.linkedin_url}>
                          <img
                            style={{ width: "30px", height: "30px" }}
                            src={linkedin}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right_section">
                  <div>
                    <h4 style={{ fontSize: "22px", marginTop: "0px" }}>
                      Curriculum
                    </h4>
                  </div>

                  <div className="right_section_curriculum">
                    {d.summerSchool_curriculum.map((l) => {
                      return (
                        <div className="curriculum_instructor_section">
                          <div className="curriculum">
                            <ReactMarkdown>{l.curriculum}</ReactMarkdown>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {d.learn_more && (
                    <div className="button">
                      <Link to={d.learn_more.slug_link}>
                        {d.learn_more.button_label}
                      </Link>
                    </div>
                  )}
                </div>
                <div className="border_bottom">
                  <div className="border_line">
                    <div className="border_color" />
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Subjects

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-top: 100px;

  .topic {
    grid-area: 1/2/2/11;
  }
  .inner_grid {
    grid-area: 2/1/3/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
  }

  .heading {
    grid-area: auto/1/auto/3;
    width: 40%;
    @media (max-width: 991px) {
      grid-area: auto/1/auto/3;
      width: 100%;
    }
  }
  .left_right_wrapper {
    grid-area: auto/2/auto/11;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;
    grid-column-gap: 100px;

    @media (max-width: 991px) {
      grid-column-gap: 0px;
    }
  }
  .left_section_wrapper {
    grid-area: auto/1/auto/2;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 54px;
    @media (max-width: 991px) {
      grid-area: auto/1/auto/3;
      margin-top: 1rem;
    }
  }
  .left_section {
    border-radius: 6px;
    height: auto;
    background-size: cover;
    width: 100%;
    height: 270px;
    margin-top: 90px;
    background-position: center;
    @media (max-width: 991px) {
      grid-area: auto/2/auto/11;
      height: 300px;
      margin-top: 0px;
    }
  }
  .right_section {
    grid-area: auto/2/auto/3;
    h4 {
      margin: 22px 0px;
    }
    @media (max-width: 991px) {
      grid-area: auto/1/auto/3;
      margin: 1rem 0;
    }
    .button {
      margin-top: 50px;

      a {
        min-width: 180px;
        padding: 20px 35px;
        background-color: var(--thirdColor);
        color: var(--secondaryColor);
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        border-radius: 66.5808px;
      }
    }
  }
  .right_section_curriculum {
    height: 433.82px;
    overflow-y: auto;
    position: relative;
    background-color: #ffffff;
    padding: 0 30px;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    @media (max-width: 767px) {
      margin-top: 30px;
      padding: 0 20px;
    }
    h1 {
      font-weight: 600;
      font-size: 24px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h2 {
      font-weight: 500;
      font-size: 22px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h3 {
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h4 {
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    h5 {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0.07em;
      color: var(--secondaryColor);
    }
    li {
      margin: 0.5rem 0px;
      letter-spacing: 0.07em;
    }
    ul {
      margin: 0 13px;
      padding: 0px 0px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.07em;
      margin: 1.5rem 0;
      text-align: justify;
      @media (max-width: 550px) {
        font-size: 16px;
      }
      @media (max-width: 479px) {
        margin: 1rem 0;
      }
    }

    @media (max-width: 479px) {
      margin-top: 20px;
      h1 {
        font-size: 24px;
        font-weight: 600;
      }
      h2 {
        font-size: 22px;
        font-weight: 500;
      }
      h3 {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
  .instructor {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 2.5rem;
  }
  .instructor_section {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
  }
  .instructor_pic {
    width: 100%;
    display: flex;
  }
  .profile_photo {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    @media (max-width: 479px) {
      width: 60px;
      height: 60px;
    }
  }
  .instructor_info {
    padding: 0 15px;
  }
  h5 {
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 0;
    @media (max-width: 479px) {
      font-size: 12px;
      margin-top: -24px !important;
    }
  }
  h2 {
    font-weight: 600;
    @media (max-width: 767px) {
      font-size: 20px !important;
    }
    @media (max-width: 991px) {
      font-size: 25px;
    }
  }
  p {
    @media (max-width: 991px) {
      font-size: 14px;
    }
  }
  h4 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 0px;
    @media (max-width: 479px) {
      font-size: 18px !important;
    }
  }

  .inner_grid_section {
    padding-bottom: 100px;
  }
  .instructor_desc,
  .instructor_link {
    padding-left: 0px;
    @media (max-width: 767px) {
      padding-left: 0px;
    }
  }
  .border_bottom {
    grid-area: auto/1/auto/3;
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      height: 100px;
    }

    .border_line {
      width: 100%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      @media (max-width: 767px) {
        height: 2px;
      }
      .border_color {
        width: 100px;
        height: 3px;
        background-color: var(--purpleColor);
      }
    }
  }
`
