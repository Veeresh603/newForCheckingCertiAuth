import React from "react"
import styled from "styled-components"

import ReactPlayer from "react-player"
import CourseDetailsTab from "../components/CourseDetailsTab"
import CourseDetailsVideo from "./CourseDetailsVideo"

function GetHired(props) {
  const { data } = props
  console.log(data)
  const [ended, setEnded] = React.useState(false)
  const [subtopicIndex, setSubtopicIndex] = React.useState(0)
  const [curriculumIndex, setCurriculunIndex] = React.useState(0)
  const [playing, setPlaying] = React.useState(true)
  const [progress, setProgress] = React.useState([])
  const [showNotes, setShowNotes] = React.useState(false)
  const [checked, setChecked] = React.useState(false)

  const player = React.useRef()
 
  const format = (seconds) => {
    if (isNaN(seconds)) {
      return "00:00"
    }
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()

    const mm = date.getUTCMinutes()
    const ss = date.getUTCSeconds().toString().padStart(2, "0")

    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`
    }

    return `${mm}:${ss}`
  }

  const handleSubmit = (id, i) => {
    setCurriculunIndex(i)
    setSubtopicIndex(id)
  }

  //   const handleDuration = duration => {
  // //     console.log("onDuration", duration)
  // //     setDuration(duration)
  // //   }
  //   const handleSeekChange = e => {
  //     setPlayed(parseFloat(e.target.value))
  //   }

  const handleProgress = (state) => {
    setProgress(state)
  }
  const handlePlayPause = () => {
    setPlaying(!playing)
    setShowNotes(!showNotes)
  }
  const handleCancel = () => {
    setShowNotes(!showNotes)
    setPlaying(!playing)
  }
  const handleVideoEnd = (e) => {
    setEnded(true)
    setChecked(true)
  }

  //   console.log(duration * progress.played)
  const currentTime = player.current ? player.current.getCurrentTime() : "00:00"
  const durationTime = player.current ? player.current.getDuration() : "00:00"
  const elapsedTime = format(currentTime)
  const totalDuration = format(durationTime)
  // console.log(user)
  return (
    <Wrapper>
      <div className="left_section">
        <div className="left_section_heading">
          <h2>{data.title}</h2>
        </div>
        <CourseDetailsVideo
          data={data}
          handleVideoEnd={handleVideoEnd}
          handleSubmit={handleSubmit}
          ended={ended}
          subtopicIndex={subtopicIndex}
          curriculumIndex={curriculumIndex}
          checked={checked}
        />
      </div>
      <div className="right_section">
        <div className="right_section_description">
          <div className="video_player">
            <div className="player-wrapper">
                <ReactPlayer
                  ref={player}
                  className="react-player"
                  url={`https://player.vimeo.com/video/${data.curriculum[curriculumIndex].subtopic[subtopicIndex].vimeo_url}`}
                  width="100%"
                  height="100%"
                  onProgress={handleProgress}
                  playing={playing}
                  onEnded={() => handleVideoEnd}
                />
              </div>
          </div>
          <div className="topic_heading">
            <h3 style={{ color: "#fff" }}>
              {data.curriculum[curriculumIndex].title}
            </h3>
          </div>
          {/* <div className="course_tab_for_desktop">
            
          </div> */}

          <CourseDetailsTab
              link={false}
              ReadMoreProps={true}
              elapsedTime={elapsedTime}
              OnPlayPause={handlePlayPause}
              showNotes={showNotes}
              handleCancel={handleCancel}
              cuuriculum={data.curriculum}
              curriculumIndex={curriculumIndex}
              subtopicIndex={subtopicIndex}
              data={data}
              handleSubmit={handleSubmit}
            />
          {/* <ReactMarkdown>
            {I
              data.strapiCourse.curriculum[curriculumIndex].subtopic[
                subtopicIndex
              ].DetailsForSubtopic
            }
          </ReactMarkdown> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default GetHired

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  margin-top: 100px;
  .left_section {
    width: 25%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border-right: 1px solid var(--secondaryColor);
  }
  .player-wrapper {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;
    width: 80%;
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
  .right_section {
    width: 75%;
    position: relative;
  }
  .MuiTypography-body1 {
    width: 100%;
  }
  .topic_heading {
    display: flex;
    width: 100%;
    background-color: var(--secondaryColor);
    justify-content: center;
    margin-top: -50px;
    padding-bottom: 45px;
    @media (max-width: 767px) {
      margin-top: 0px;
      padding-bottom: 10px;
    }
  }
  /* .MuiPaper-elevation1{
       box-shadow : none;
   } */
  li {
    width: 100%;
    list-style: none;
    font-size: 16px;
    font-family: var(--family);
    padding: 10px 0;
  }
  .lessons_panel {
    background-color: #d9f8ff;
    margin-bottom: 5px;
    padding-left: 5px;
    color: var(--secondaryColor);
    padding-left: 16px;
    font-weight: 400;
  }
  .lessons_panel:nth-child(odd) {
    background-color: #deeffe;
    color: var(--secondaryColor);
  }
  .right_section_description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .video_player {
    width: 100%;
    background-color: var(--secondaryColor);
    display: flex;
    justify-content: center;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  .left_section_heading {
    width: 100%;
    background-color: var(--thirdColor);
    display: flex;
    justify-content: center;
  }
  h2 {
    text-align: center;
  }

  @media (max-width: 767px) {
    .left_section {
      display: none;
      width: 0px;
    }
    .right_section {
      width: 100%;
    }
    h3 {
      font-size: 18px;
    }
  }
`
