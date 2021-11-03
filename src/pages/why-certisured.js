import React from "react"
import styled from "styled-components"
import WhycertisuredBanner from "../components/WhyCertisured/WhyCertisuredBanner"
import PlayIcon from "../images/whycertisured/playIcon.svg"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import "../components/WhyCertisured/whycertisured.css"
import WhyCertisured01 from "../components/WhyCertisured/WhyCertisured01"
import WhyCertisured03 from "../components/WhyCertisured/WhyCertisured03"
import WhyCertisuredC from "../components/WhyCertisured/WhyCertisured03 copy.js"
import Seo from "../components/Seo/seo"
import certi from "../images/whycertisured/03 Certificate.svg"
import img_04 from "../images/whycertisured/06.svg"
import img_05 from "../images/whycertisured/07.svg"
import img_06 from "../images/whycertisured/08.svg"
import img_07 from "../images/whycertisured/09.svg"
import img_08 from "../images/whycertisured/10.svg"
import img_09 from "../images/whycertisured/11.svg"
import img_13 from "../images/whycertisured/Layer 1.png"
import podcast from "../images/whycertisured/02 podcast.svg"

import WhyCertisured10 from "../components/WhyCertisured/WhyCertisured10"
import WhyCertisured11 from "../components/WhyCertisured/WhyCertisured11"
import WhyCertisured12 from "../components/WhyCertisured/WhyCertisured12"
import WhyCertisured13 from "../components/WhyCertisured/WhyCertisured13"

function Whycertisured({ location }) {
  const [isOpen, setOpen] = React.useState(false)
  const onOpenModal = () => {
    setOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Seo
        title="Why Certisured"
        description="Certisured Certificates are Recognized in Industry as a Hard-Earned Certificate. We focus on 360 Degree Education and our students get the best of everything."
        image="https://certisured.com/whycertisured.png"
        keywords={[
          `why certisured`,
          `training`,
          `artificial intelligence`,
          `cyber security`,
          `data science`,
          `ethical hacking`,
          `digital marketing`,
          `bootcamps`,
          `summerschool`,
          `certificate`,
          `certisured`,
          `placement assisstance`,
          `resume preparation`,
          `video resume`,
          `portfolio creation`,
          `mock interviews`,
          `linkedin profile optimization`,
          `paid internship`,
          `Soft skills, Presentation & Communication`,
          `DIANA MORRIS`,
          `Self mastery with Neuro linguistic Programming`,
          `Nelly Caldeira`,
        ]}
        location={`${location.pathname}`}
      />
      <Container>
        <WhycertisuredBanner />
        <div className="youtube_player_icon">
          <Modal open={isOpen} onClose={onOpenModal} center>
            <lite-youtube
              style={{ borderRadius: "6px" }}
              params="controls=0&enablejsapi=1"
              videoplay="Mirar"
              videoid="eAWlPa9eosU"
            ></lite-youtube>
          </Modal>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
            src={PlayIcon}
            alt="play youtube certisured"
          />
        </div>
        <div className="why_certisured_description">
          <h2>The Strength of Your Portfolio is the mark of Our Success</h2>
          <div className="border_down" />
        </div>
        <div className="why_certisured_description1">
          <h4>
            Certisured is cons antly trying to create maximum opportunities for
            our students helping them to stand out from the crowd. Your success
            is finally our sucess
          </h4>
        </div>
        <WhyCertisured01 />
        <WhyCertisuredC
          title="Monthly podcast"
          width="100%"
          height="172.94px"
          paddingRight="0px"
          img={podcast}
          number="02"
          grid_area="6/2/7/11"
          fontWeight="400"
          fontSize="32px"
        />
        <WhyCertisured03
          title="Hard-earned Certificate"
          width="100%"
          height="487px"
          paddingRight="0"
          img={certi}
          number="03"
          grid_area="7/2/8/11"
          desc="Certisured certification is an earned certificate. As a policy, our assessments are hard and the KPI's to full-fill are on par with industry standards. A student can take as much time as they want, and ask for as many explanations as they wish, but the required assignments and submissions must be submitted with industry standards set by the instructor"
        />
        <div className="assured_placement_assisstance">
          <h2>Assured Placement Assisstance</h2>
        </div>
        <WhyCertisuredC
          title="RESUME PREPARATION"
          width="100%"
          height="221px"
          paddingRight="0px"
          img={img_04}
          number="04"
          grid_area="9/2/10/11"
          fontWeight="400"
          fontSize="32px"
          desc="Resumes and CV's are the first impression on a recruiter. We have you covered "
        />
        <WhyCertisuredC
          title="BRANDED VIDEO RESUME "
          width="100%"
          height="148.89px"
          paddingRight="0px"
          img={img_05}
          number="05"
          grid_area="10/2/11/11"
          fontWeight="400"
          fontSize="32px"
          desc="Our courses are so thorough that you will feel like a rock star when we record your video resume"
        />
        <WhyCertisuredC
          title="PORTFOLIO CREATION"
          width="100%"
          height="172.38px"
          paddingRight="0px"
          img={img_06}
          number="06"
          grid_area="11/2/12/11"
          fontWeight="400"
          fontSize="32px"
          desc="Every assignment, project and activity during the course is aimed at making the students portfolio shine
        "
        />
        <WhyCertisuredC
          title="MOCK INTERVIEWS"
          width="100%"
          height="147.52px"
          paddingRight="0px"
          img={img_07}
          number="07"
          grid_area="12/2/13/11"
          fontWeight="400"
          fontSize="32px"
          desc="Our placement team conducts mock interviews for students before the actual interviews with our hiring partners"
        />
        <WhyCertisuredC
          title="LINKEDIN PROFILE OPTIMIZATION"
          width="80%"
          height="158px"
          paddingRight="0px"
          img={img_08}
          number="08"
          grid_area="13/2/14/11"
          fontWeight="400"
          fontSize="32px"
          desc="Your recruiter is searching for you on LinkedIn and we know how to make sure they will find you! "
        />
        <WhyCertisuredC
          title="RESEARCH PAPERS"
          width="100%"
          height="195.89px"
          paddingRight="0px"
          img={img_09}
          number="09"
          grid_area="14/2/15/11"
          fontWeight="400"
          fontSize="32px"
          desc="Extraordinary students get a chance to present research papers in top international journals and the submission fees will be borne by us. "
        />
        <WhyCertisured10 />
        <WhyCertisured11 />
        <WhyCertisured12 />
        <WhyCertisured13 />
        <div className="workshops_and_online_events" />
      </Container>
    </Wrapper>
  )
}

export default Whycertisured
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(11, 1fr);
  grid-row-gap: 100px;
  margin-top: 100px;
  overflow: hidden;
  height: auto;
  justify-content: center;

  > h1 {
    margin-top: 50px;
    border-bottom: 1px solid #ff002b;
    @media (max-width: 479px) {
      text-align: center;
      font-size: 17px;
    }
  }
  @media (min-width: 1930px) {
    width: 80%;
    justify-content: center;
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
  .youtube_player_icon {
    grid-area: 2/2/3/11;
    display: flex;
    justify-content: center;
  }
  .why_certisured_description {
    grid-area: 3/2/4/11;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    .border_down {
      width: 93.9px;
      height: 15px;
      background: var(--secondaryColor);
      @media (max-width: 767px) {
        width: 75px;
        height: 10px;
      }
    }
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      line-height: 126.5%;
      margin: 0;

      /* or 91px */
      text-align: center;
      color: #c4c4c4 !important;
      @media (max-width: 767px) {
        font-size: 26px;
      }
    }
  }
  .why_certisured_description1 {
    grid-area: 4/2/5/11;
    display: flex;
    justify-content: center;
    margin-top: -60px;

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 126.5%;
      color: #000000;
      /* or 30px */
      text-align: center;
      @media (max-width: 767px) {
        font-size: 15px;
      }
    }
  }
  .assured_placement_assisstance {
    grid-area: 8/2/9/11;
    display: flex;
    justify-content: center;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 54px;
    }
    @media (max-width: 479px) {
      grid-area: 8/1/9/12 !important;
      h2 {
        font-size: 32px;
      }
    }
    @media (max-width: 767px) {
      grid-area: 8/2/9/11;
      h2 {
        font-size: 32px;
        text-align: center;
      }
    }
  }
  .workshops_and_online_events {
    grid-area: 19/1/20/12;
    background-image: url("${img_13}");
    background-size: cover;
    width: 100%;
    height: 666px;
    @media (max-width: 479px) {
      background-size: contain !important;
      background-repeat: no-repeat !important;
      height: 350px;
    }
  }
`
