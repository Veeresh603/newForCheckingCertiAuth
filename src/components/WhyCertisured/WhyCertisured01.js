import React from "react"
import styled from "styled-components"
import Graph1 from "../../images/whycertisured/graph1.png"
import Graph2 from "../../images/whycertisured/graph2.png"
import Brain from "../../images/whycertisured/brain01.png"
import Sitting from "../../images/whycertisured/sitting01.png"
import number from "../../images/whycertisured/number circle.svg"

function WhyCertisured01() {
  return (
    <Wrapper>
      <div className="icon_and_heading">
        <div className="icon_01">
          <span
            style={{
              fontSize: "48px",
              fontWeight: "600",
              color: "var(--secondaryColor)",
            }}
          >
            01
          </span>
        </div>
        <div className="heading_01">
          <h2>
            How long can you retain <span>what</span> you learn ?
          </h2>
        </div>
      </div>
      <div className="both_section_wrapper">
        <div className="description_01">
          <p>
            Memory retention is 100% at the time of learning any particular
            pieces of information. However, it drops rapidly to 40% within the
            first few days. After which, the declination of memory retention
            slows down again
          </p>
        </div>
        <div className="description_02">
          <h4>
            There are various factors that can affect the rate of forgetting.
            Some of which are
          </h4>
        </div>
        <div className="description_03">
          <div className="description_01_points">
            <li>Meaningfulness of the information</li>
            <li>The way it is represented</li>
            <li>Physiological actors (stress, sleep, etc)</li>
          </div>
          <div style={{paddingTop: "20px"}}>
          <p>
            The rate of forgetting isn’t same between every one. Herman
            Ebbinghaus pointed out that difference in memory performance between
            two different individuals can be explained by mnemonic
            representation skills. Increasing Memory Strength
          </p>
            
          </div>
     
        </div>
        <div className="middle_section_01">
          <img src={Graph1} alt="why certisured graph" />
          <div className="para_width">
            <p>
              Ebbinghaus hypothesized that difference in memory strength between
              individuals could be somewhat triumphed over by simple training in
              mnemonic techniques. Two of the methods he asserted to be among
              the best ways to increase strength of memory are
            </p>
          </div>
          <img src={Graph2} alt="why certisured graph" />
          <div className="para_width">
            <h5>
              <span>
                Certisured is the India's first Ed-Tech platform where
              </span>{" "}
              Courses and LMS are designed to include scheduled audio/video
              summary of lessons on the 1st, 3rd and 7th day to enable long term
              retention of concepts.
            </h5>
          </div>
        </div>
        <div className="left_section_01_brain">
          <p>
            Our Courses emphasize on Quality of retention and recall, which
            facilities creativty
          </p>
          <img src={Brain} alt="why certisured brain" />
        </div>
        <div className="left_section_01_sitting">
          <img src={Sitting} alt="why certisured sitting" />
          <p>Is there a science behind why we forget ?</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default WhyCertisured01

const Wrapper = styled.div`
  grid-area: 5/2/6/11;
  /* display: grid;
  grid-template-columns: 1fr 30%;
  grid-template-rows: auto; */
  width: 100%;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 165%;
    margin: 0;
  }

  .para_width {
    width: 100%;
    padding: 30px 30px;

    h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      color: var(--secondaryColor);
      margin: 0;
      span {
        text-transform: uppercase;
        color: var(--thirdColor);
      }
    }
  }

  .icon_and_heading {
    width: 70%;
    h2 {
      font-style: normal !important;
      font-weight: bold !important;
      font-size: 42px !important;
      line-height: 134% !important;
      span {
        color: var(--thirdColor);
      }
    }

    .icon_01 {
      width: 110px;
      height: 110px;

      background-image: url("${number}");
      background-size: contain;
      background-repeat: no-repeat;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .both_section_wrapper {
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-template-rows: auto;
    width: 100%;
    position: relative;
    /* grid-area: 1/1/2/2;
      display: flex;
      flex-direction: column; */

    .heading_01 {
      width: calc(100% - 130px);
    }
    .description_01 {
      grid-area: 1/1/2/2;
    }
    .description_02 {
      grid-area: 2/1/3/2;
      padding: 20px 0;
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 145%;
        margin: 0;
      }
    }
    .description_03 {
      grid-area: 3/1/4/2;

      li {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 145%;
        color: var(--secondaryColor);
        padding: 10px 0;
      }
    }

    .middle_section_01 {
      grid-area: 4/1/5/3;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 20px;
    }
    .left_section_01 {
      grid-area: 1/2/2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 5px 0px 70px;
      margin-top: -89px;
      position: absolute;
    }
    .left_section_01_brain {
      grid-area: 1/2/2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 5px 0px 70px;
      position: absolute;
      p {
        font-size: 15.18px;
      }
      img {
        max-width: 100px;
      }
    }
    .left_section_01_sitting {
      grid-area: 2/2/3/3;
      padding: 0px 5px 0px 70px;
      position: absolute;

      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 150px;
      p {
        font-size: 15.18px;
      }
      img {
        max-width: 122px;
      }
    }
  }

  @media (max-width: 479px) {
    .icon_and_heading {
      width: 100%;
       .icon_01{
         width: 62.96px !important;
         height: 62.96px !important;
       }
       span{
         font-size: 23px !important;
       }
      h2 {
        font-size: 26px !important;
      }
    }
    .both_section_wrapper {
      p{
        font-size: 17px;

      }
      .left_section_01_brain  {
        grid-area: 1/1/2/3;
        margin-top: 0px;
        position: unset;
        padding: 30px 0px;

        p{
          font-size: 14px;
          text-align: center;
        }
      }
      .description_01{
        grid-area: 2/1/3/3;

      }
      .description_02{
        grid-area: 3/1/4/3;
        h4{
          font-size: 22px;
        }
      }
      .left_section_01_sitting{
        grid-area: 4/1/5/3;
        position: unset;
        padding: 0px;
        p{
          font-size: 14px;
          text-align: center;

        }
      }
      .description_03{
        grid-area: 5/1/6/3;
        li{
          font-size: 17px;
        }

      }
      
      .middle_section_01 {
        grid-area: 6/1/7/3;
        .para_width{
          padding: 20px 0;
        }
        h5{
          font-size: 17px !important;
        }
        img{
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .icon_and_heading {
        width: 100%;
      h2 {
        font-size: 30px;
      }
    }
    .both_section_wrapper {
      p{
        font-size: 17px;

      }
      .left_section_01_brain  {
        grid-area: 1/1/2/3;
        margin-top: 0px;
        position: unset;
        padding: 20px 0px;
         img{
           padding: 20px 0;
         }
        p{
          font-size: 14px;
          text-align: center;
        }
      }
      .description_01{
        grid-area: 2/1/3/3;

      }
      .description_02{
        grid-area: 3/1/4/3;
        h4{
          font-size: 20px;
        }
      }
      .left_section_01_sitting{
        grid-area: 4/1/5/3;
        position: unset;
        padding: 0px;
        p{
          font-size: 14px;
          text-align: center;

        }
        img{
           padding: 20px 0;
         }
      }
      .description_03{
        grid-area: 5/1/6/3;
        li{
          font-size: 17px;
        }

      }
      
      .middle_section_01 {
        grid-area: 6/1/7/3;
        .para_width{
          padding: 20px 0;
        }
        h5{
          font-size: 20px;
        }
        img{
          width: 100%;
        }
      }
    }
  }
`
