import React from "react"
import styled from "styled-components"
import who from "../../images/who.jpg"

import HeadingBorderAnimation from "../HeadingBorderAnim"

function WhoWeAre(props) {
  // const [show, setShow] = React.useState(false)

  // const handleShow = () => {
  //   if (window.scrollY >= 3200) {
  //     setShow(true)
  //   } else {
  //     setShow(false)
  //   }
  // }

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleShow)
  //   return () => window.removeEventListener("scroll", handleShow)
  // }, [])
  return (
    <Wrapper>
      <div className="wrapper_section">
        <div className="section">
          <div className="section_right" />

          <div className="section_middle">
            <div className="heading">
              <HeadingBorderAnimation>{props.title}</HeadingBorderAnimation>
            </div>
            <div className="text">
              <h4>{props.shortDescrption}</h4>
            </div>
          </div>
        </div>
        {/* <div className="main_counter_wrapper">
          <div className="counter_heading_heading">
            <h2>Lorem ipsum</h2>
          </div>
          {show && (
            <div className="number_counter_wrapper">
              <div className="number_counter_section">
                <NumberCounter number="330" duration="2" label="Lorem ipsum" />
              </div>
              <div className="number_counter_section">
                <NumberCounter number="70" duration="2" label="Lorem ipsum" />
              </div>
              <div className="number_counter_section">
                <NumberCounter number="1330" duration="2" label="Lorem ipsum" />
              </div>
              <div className="number_counter_section">
                <NumberCounter number="1130" duration="2" label="Lorem ipsum" />
              </div>
            </div>
          )}
        </div> */}
      </div>
    </Wrapper>
  )
}

export default WhoWeAre

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  .counter_heading_heading {
    display: flex;
    width: 80%;
    justify-content: flex-start;
    @media (max-width: 991px) {
      width: 90%;
    }
    h2 {
      font-size: 24px;
      font-weight: 600;
      color: #000 !important;
      @media (max-width: 479px) {
        font-size: 22px;
      }
    }
  }
  .main_counter_wrapper {
    width: 80%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 991px) {
      width: 100%;
      margin-top: 0px;
    }
  }
  .wrapper_section {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    height: auto;
    align-items: center;
    .number_counter_wrapper {
      display: flex;
      width: 80%;
      height: auto;
      justify-content: space-between;
      border-bottom: 2px solid rgba(0, 0, 0, 0.25);
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 991px) {
        width: 90%;
        border-bottom: 0px;
      }

      .number_counter_section {
        min-width: 200px;
        height: auto;
        position: relative;

        @media (max-width: 479px) {
          min-width: 150px;
        }
      }
      .number_counter_section::after {
        content: "";
        position: absolute;
        width: 32.97px;
        height: 2px;
        background-color: #6f62df;
      }
    }
  }
  .section {
    width: 100%;
    /* height: 714.25px; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    @media (max-width: 479px) {
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      height: auto;
    }
  }

  .section_right {
    width: 20%;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    clip-path: circle(67.6% at 12% 8%);
    background-image: url("${who}");
    background-size: contain;
    min-height: 300px;

    -ms-filter: grayscale(0.2) sepia(0.5) brightness(90%);
    -webkit-filter: grayscale(0.2) sepia(0.5) brightness(90%);
    -moz-filter: grayscale(0.2) sepia(0.5) brightness(90%);
    -o-filter: grayscale(0.2) sepia(0.5) brightness(90%);
    filter: grayscale(0.2) sepia(0.5) brightness(90%);

    @media (max-width: 767px) {
      height: auto;
      width: 60%;
      min-height: 200px;
    }
  }
  .rectangle_box {
    position: absolute;
    width: 100%;
    height: 60%;
    background-color: #000000;
    border-radius: 5px;
    bottom: 0;
    margin-bottom: -170px;
    display: block;

    img {
      width: 100%;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .section_middle {
    width: 60%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    align-content: center;
    /* height: 714.25px; */
    padding: 0 80px;
    @media (max-width: 767px) {
      padding: 0 20px;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      height: auto;
      width: 100%;
      padding-top: 70px;
    }
    .heading {
      width: 100%;
      display: flex;
      align-items: flex-start;
      align-self: flex-start;
    }
    .text {
      width: 100%;
      height: auto;

      h4 {
        letter-spacing: 0.115em;
        line-height: 28px;
        font-size: 20px;

        font-family: var(--family);
        font-weight: 300;
        @media (max-width: 479px) {
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 23px;
        }
      }
    }
    .para {
      width: 100%;
      height: auto;

      p {
        font-size: 16px;
        font-family: var(--family);
        font-weight: var(--LightWeight);
        margin: 0;
        @media (max-width: 479px) {
          font-size: 14px;
          margin-top: 0;
        }
      }
    }
  }

  .button {
    width: 100%;
    margin-top: 25px;
    display: flex;
  }
`
