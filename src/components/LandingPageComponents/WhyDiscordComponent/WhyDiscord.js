import React from "react"
import ReactMarkdown from "react-markdown"
import Wrapper from "./whydicord.style"

function WhyDiscord({ data, id }) {
  return (
    <Wrapper>
      <div className="why_discord_heading" id="whydiscord">
        <span>{data.span}</span>
        <h1>{data.title}</h1>
      </div>
      <div className="why_dicord_left_section">
        <div className="description">
          <ReactMarkdown>{data.why_discord_description}</ReactMarkdown>
        </div>
      </div>
      <div className="right_section_video">
        <lite-youtube
          style={{ borderRadius: "6px" }}
          params="controls=0&enablejsapi=1"
          videoplay="Mirar"
          videoid={data.video_link}
        ></lite-youtube>
      </div>
    </Wrapper>
  )
}

export default WhyDiscord

// const Wrapper = styled.div`
//   width: auto;
//   height: auto;
//   grid-template-rows: auto;
//   grid-template-columns: repeat(11, 1fr);
//   box-sizing: border-box;
//   .why_discord_heading {
//     grid-area: 1/2/2/11;
//   }
//   span {
//     font-size: 20px;
//     letter-spacing: 3px;
//     font-weight: 400;
//   }
//   h1 {
//     padding-top: 0px !important;
//     font-weight: 800;
//     letter-spacing: 3px;
//     color: var(--secondaryColor);
//     margin-top: 0px;
//   }
//   .why_dicord_left_section {
//     grid-area: 2/2/3/5;
//   }
//   .why_discord_right_section {
//     grid-area: 2/6/3/11;
//   }
//   .bootcamp-video {
//     position: relative;
//   }
//   .react-player {
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
// `
