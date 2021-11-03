import React from "react"
import Wrapper from "./bootcampinstrucor.style"
import linkedin from "../../../images/linkedin.svg"
import ReactMarkdown from "react-markdown"

function BootcampInstructor({ data }) {
  const instructorOne = data.about_instuctor.length
  console.log(data.about_instuctor[0].review_image.url)
  return (
    <Wrapper>
      <div className="bootcamp_instructor_heading">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>
      <div className="bootcamp_about_instructor_single_wrapper">
        {instructorOne === 1 &&
          data.about_instuctor.map((d, id) => {
            return (
              <div className="bootcamp_about_instructor_single_section1">
                <div className="bootcamp_about_instructor_single">
                  <div
                    className="about_instructor_image"
                    style={{
                      backgroundImage: `url(${d.review_image.url})`,
                    }}
                  >
                  </div>
                  <div className="about_instructor_desc_box">
                    <div className="about_instructor_desc_box_flex">
                      <div className="name_and_linkedin_flex">
                        <div className="name_and_surname">
                          <h4>{d.name}</h4>
                          <h5>{d.company}</h5>
                        </div>
                      </div>
                      <a href={d.slug}>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={linkedin}
                          alt={!d.name ? d.title : d.name}
                        />
                      </a>
                    </div>
                    <ReactMarkdown>{d.descrption}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )
          })}
        {instructorOne !== 1 &&
          data.about_instuctor.map((d, id) => {
            return (
              <div className="bootcamp_about_instructor_single_section">
                <div
                  className="bootcamp_about_instructor_single"
                  id={
                    id % 2 === 0
                      ? "bootcamp_about_instructor_single_0"
                      : "bootcamp_about_instructor_single_1"
                  }
                >
                  <div
                    className="about_instructor_image"
                    style={{
                      backgroundImage: `url(${d.review_image.url})`,
                    }}
                  />
                  <div className="about_instructor_desc_box">
                    <div className="about_instructor_desc_box_flex">
                      <div className="name_and_linkedin_flex">
                        <div className="name_and_surname">
                          <h4>{d.name}</h4>
                          <h5>{d.company}</h5>
                        </div>
                      </div>
                      <a href={d.slug}>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={linkedin}
                          alt={!d.name ? d.title : d.name}
                        />
                      </a>
                    </div>
                    <ReactMarkdown>{d.descrption}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </Wrapper>
  )
}

export default BootcampInstructor
