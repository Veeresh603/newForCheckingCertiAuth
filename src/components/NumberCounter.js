import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

function NumberCounter(props) {
  const { label, number, duration } = props
  const [count, setCount] = React.useState("0")

  React.useEffect(() => {
    let start = 0
    const end = parseInt(number.substring(0, 3))
    if (start === end) return
    let totalMilSecDur = parseInt(duration)
    let incrementTime = (totalMilSecDur / end) * 1000

    let timer = setInterval(() => {
      start += 1
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)
    }, incrementTime)
  }, [number, duration])
  return (
    <Wrapper>
      <div className="counter_heading">
        <Fade bottom duration={1000} delay={500} distance="30px">
          <h3>{label}</h3>
        </Fade>
      </div>
      <div className="counter_number">
        <Fade top duration={1200} delay={570} distance="60px">
          <span>{count}+</span>
        </Fade>
      </div>
    </Wrapper>
  )
}

export default NumberCounter

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .counter_heading {
    padding: 10px 0;
  }
  .counter_number {
    padding-bottom: 20px;
  }
  h3 {
    font-weight: 700;
    font-size: 18px;
    margin: 0;
    color: #6f62df;
    @media (max-width: 479px) {
        font-size: 14px;
    }
  }

  span {
    font-weight: 700;
    font-size: 64px;
    @media (max-width: 479px) {
        font-size: 40px;
    }
  }
`
