import React from "react"
import { useTimer } from "react-timer-hook"
import styled from "styled-components"

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  })

  return (
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <div className="date_time_wrapper">
          <div className="days">
            <span>{days < 10 ? `0${days}` : days}</span>
            <h4>days</h4>
          </div>

          <div className="days">
            <span>{hours < 10 ? `0${hours}` : hours}</span> <h4>hrs</h4>
          </div>

          <div className="days">
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span> <h4>mins</h4>
          </div>

          <div className="days">
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span> <h4>sec</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default MyTimer

const Wrapper = styled.div`
  width: 100%;
  .date_time_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .days {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 22.19px;
      font-weight: 600;
      color: #b1b1b1;
      margin-top: 5px;
    
    }

    span {
      font-size: 66px;
      font-weight: 700;
      color: #d22b6e;
    }

    @media (max-width: 479px) {
      span {
        font-size: 42px;
        font-weight: 700;
        color: #d22b6e;
      }
      h4 {
        font-size: 18px;
      }
    }
  }
`
