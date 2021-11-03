import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  margin-top: 100px;

  span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 22px;
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
  .apply_now {
    border: none;
    outline: none;
    min-width: 250px;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    padding: 15px 30px;
    border-radius: 66.5808px;
    cursor: pointer;
  }
  .bootcamp_curriculum_heading {
    grid-area: 1/2/2/6;
  }
  .bootcamp_curriculum_download_button {
    grid-area: 1/9/2/11;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      grid-area: 2/2/3/9;
    }
  }
  li {
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  a {
    width: auto;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 66.5808px;
    text-align: center;
    display: flex;
    background-color: var(--purpleColor);
    color: #fff;
    justify-content: center;
  }
  .bootcamp_curriculum_desc {
    grid-area: 2/2/3/11;
    @media (max-width: 767px) {
      grid-area: 3/2/4/11;
    }
  }
  .bootcamp_curriculum_timeline {
    grid-area: 3/2/4/11;
    @media (max-width: 767px) {
      grid-area: 4/1/5/12;
    }
    ul {
      padding-left: 24px;
    }
  }
`

export default Wrapper
