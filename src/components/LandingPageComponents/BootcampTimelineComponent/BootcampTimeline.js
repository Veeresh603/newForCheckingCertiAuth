import React from "react"
import Wrapper from "./bootcamptimeline.style"
import { Timeline, TimelineEvent } from "react-event-timeline"
import shield from "../../../images/sheild.svg"
import BootcampAccordion from "../BootcampAccordion"
import ReactMarkdown from "react-markdown"

function BootcampTimeline({ days }) {
  const [isDesktop, setIsDesktop] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    if (window.innerWidth >= 479) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  const title_Style = isDesktop
    ? {
        fontSize: "26px",
        fontWeight: "600",
        color: "var(--secondaryColor)",
        marginLeft: "20px",
        marginTop: "-20px",
      }
    : {
        fontSize: "22px",
        fontWeight: "600",
        color: "var(--secondaryColor)",
        marginTop: "-31px",
        marginLeft: "13px",
      }
  return (
    <Wrapper>
      {days.map(d => (
        <Timeline className="Timeline_line" key={d.id}>
          <TimelineEvent
            className="timeline"
            titleStyle={{ ...title_Style }}
            title={d.title}
            icon={
              <img
                src={shield}
                alt="bootcamp timeline"
                className="bootcamp_icon"
              />
            }
            bubbleStyle={{
              border: "none",
              width: "auto",
              height: "auto",
              marginLeft: "-10px",
              background: "none",
              left: "7.5px",
              top: "-21px",
            }}
            iconStyle={{ width: "auto", height: "auto" }}
            contentStyle={{ boxShadow: "none", width: "100%" }}
          >
            <ReactMarkdown>{d.description}</ReactMarkdown>
            <BootcampAccordion data={d.bootcamp_session} />
          </TimelineEvent>
        </Timeline>
      ))}
    </Wrapper>
  )
}

export default BootcampTimeline
