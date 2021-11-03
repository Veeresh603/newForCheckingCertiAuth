import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  margin-top: 100px;
  padding-bottom: 150px;
  @media (max-width: 767px) {
    padding-bottom: 0px;
    }
  span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  h1 {
    padding-top: 0px !important;
    font-weight: bold;
    color: var(--secondaryColor);
    margin-top: 0px;
    font-size: 48px;
    letter-spacing: 0.04em;
    @media (max-width: 767px) {
      font-size: 36px;
    }
  }
  .bootcamp_instructor_heading {
    grid-area: 1/2/2/6;
    @media (max-width: 479px){
        grid-area: 1/2/2/11;

    }
  }
  .bootcamp_about_instructor_single_wrapper {
    grid-area: 2/1/3/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
     @media (max-width: 767px){
       place-items: center;
     }
  }
  .bootcamp_about_instructor_single_section {
    grid-area: auto/2/auto/11;
    display: flex;
    position: relative;
    height: 300px;
    @media (max-width: 767px) {
      height: auto;
      grid-area: auto/2/auto/11;
       
    }
  }
  .bootcamp_about_instructor_single_section1 {
    grid-area: auto/1/auto/12;
    display: flex;
    position: relative;
    height: 300px;
    justify-content: center;
    @media (max-width: 767px) {
      height: auto;
      grid-area: auto/2/auto/11;
       
    }
  }
  .bootcamp_about_instructor_single {
    display: flex;
    position: absolute;
    flex-direction: column;
    @media (max-width: 767px) {
      position: unset;
      align-items: center;
      padding-bottom: 30px;
    }
  }
  .about_instructor_image {
    width: 255.78px;
    height: 255.78px;
    filter: drop-shadow(0px 2.11445px 7.92917px rgba(0, 0, 0, 0.25));
    border-radius: 211.021px;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 2.11445px 7.92917px rgba(0, 0, 0, 0.25);

    @media (max-width: 767px) {
      width: 221.42px;
      height: 221.42px;
    }
  }
  #bootcamp_about_instructor_single_0 {
    right: 10%;
    @media (max-width: 767px) {
      right: 0;
    }
  }
  #bootcamp_about_instructor_single_1 {
    left: 10%;
    @media (max-width: 767px) {
      right: 0;
    }
  }
  #bootcamp_about_instructor_single_2 {
    right: 10%;
    @media (max-width: 767px) {
      right: 0;
    }
  }
  #bootcamp_about_instructor_single_3 {
    left: 10%;
    @media (max-width: 767px) {
      right: 0;
    }
  }
  .about_instructor_desc_box {
    width: 331.63px;
    height: auto;
    background: #f1f1f1;
    box-shadow: 0px 2.11445px 7.92917px rgba(0, 0, 0, 0.25);
    border-radius: 5.28612px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 100px;
    margin-top: -60px;
    z-index: 1;

    @media (max-width: 767px) {
      width: auto;
      height: auto;
      margin-left: 0px;

    }
  }
  .name_and_linkedin_flex {
    display: flex;
    flex-direction: column;
  }
  .name_and_surname {
    display: flex;
    flex-direction: column;
  }
  .about_instructor_desc_box_flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.03em;
  }
  h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 10px;
    letter-spacing: 0.03em;
  }
  p {
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.03em;
  }
`

export default Wrapper
