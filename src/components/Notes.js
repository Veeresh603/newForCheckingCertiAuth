import React from "react"
import styled from "styled-components"
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus"

function Notes(props) {
  // const [notes, setNotes] = React.useState([])
  const [text, setText] = React.useState("")
  // const [show, setShow] = React.useState(false)

// console.log(text);

  const handleSave = () => {

  }
//   const handleCancel = () => {
//     setShow(!show)
//   }
  return (
    <Wrapper>
      <div className="box_layout">
        {props.showNotes  ?  (
          <>
            <div className="bookmark_notes">
              <div className="elapsed_time">{props.elapsedTime}</div>

              <div className="box_writing_notes">
                <textarea id="notesSave" name="notes" value={text} rows="4"  onChange={e => setText(e.target.value)} />
                 
              </div>
            </div>
            <div className="button_save">
              <button onClick={handleSave}>save</button>
              <button onClick={props.handleCancel}>cancel</button>
            </div>
          </>
        ) : (
          <div className="video_timer" onClick={props.onPlayPause}>
            <h2>Create a new Note @ {props.elapsedTime}</h2>
            <AiOutlinePlus />
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Notes

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  .box_layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }
  .video_timer {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 6px;
    width: 80%;
    align-items: center;
    padding: 10px;
  }
  .bookmark_notes {
    width: 90%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.03);
    align-items: center;
  }
  .elapsed_time {
    width: 10%;
  }
  .box_writing_notes {
    background-color: rgba(0, 0, 0, 0.03);
    width: 80%;
  }
`
