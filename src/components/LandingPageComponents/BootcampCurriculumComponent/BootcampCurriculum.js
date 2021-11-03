import React from "react"
import ReactMarkdown from "react-markdown"
import FormDialog from "../../FormDialogcopy/FormDialog"
import BootcampTimeline from "../BootcampTimelineComponent/BootcampTimeline"
import Wrapper from "./bootcampcurriculum.style"
import scrollTo from "gatsby-plugin-smoothscroll"

function BootcampCurriculum(props) {
  const { days, data } = props
  return (
    <Wrapper>
      <div className="bootcamp_curriculum_heading">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>
      <div className="bootcamp_curriculum_download_button">
        {!props.brouchre ? (
          <button className="apply_now" onClick={() => scrollTo("#benefits")}>
            Apply now
          </button>
        ) : (
          <FormDialog
            mailchimp={true}
            title={data.curriculum_brochure}
            slug={props.slug}
          />
        )}{" "}
      </div>
      <div className="bootcamp_curriculum_desc">
        <ReactMarkdown>{data.description}</ReactMarkdown>
      </div>
      <div className="bootcamp_curriculum_timeline">
        <BootcampTimeline days={days} />
      </div>
    </Wrapper>
  )
}

export default BootcampCurriculum
