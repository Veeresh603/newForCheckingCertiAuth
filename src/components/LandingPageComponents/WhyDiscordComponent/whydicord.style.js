import styled from "styled-components"

const Wrapper = styled.div`
  width: auto;
  height: auto;
  display:grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(11, 1fr);
  box-sizing: border-box;
  margin-top:100px;

  padding: 50px 0;
  .why_discord_heading {
    grid-area: 1/2/2/11;
  }
  .right_section_video{
    grid-area: 2/7/3/11;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      grid-area: 2/2/3/11;
    }
  }

  .bg__header {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0.7; */
  }
  .banner_section {

    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 4:3 Aspect Ratio */
    border-radius: 6px;

    @media (max-width: 479px) {
      padding-top: 56.25%; /* 4:3 Aspect Ratio */
    }
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
  .why_dicord_left_section {
    grid-area: 2/2/3/6;
  }



 
  ul{
    @media (max-width: 767px) {
      padding: 0px;

    }
  }
  li{
    font-size: 18px;
    font-weight: normal;
    text-align: justify;
letter-spacing: 0.03em;
padding: 12px 0;
@media (max-width: 767px) {
  font-size: 15px;

    }
  }

  @media (max-width:991px){
      .react-player__preview{
          background-size: contain;
          background-repeat: no-repeat;
      }
      p{
          font-size: 13px;
      }
  }
  @media (max-width: 767px){
      .why_discord_heading{
          grid-area: 1/2/2/11;
      }
      .why_discord_right_section{
          grid-area: 2/2/3/11;
      }
      .why_dicord_left_section{
          grid-area: 3/2/4/11;
      }
    
     
  }
`

export default Wrapper