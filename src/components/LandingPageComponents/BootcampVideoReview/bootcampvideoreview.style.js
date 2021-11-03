import styled from "styled-components"

const Wrapper = styled.div`
    width:100%;
    height:auto;
    display:grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    box-sizing: border-box;
    margin-top:100px;

  .bootcamp_video_review_heading{
      grid-area: 1/2/2/11;
  }
  .bootcamp_video_reviews_wrapper{
      grid-area: 2/2/3/11;
      height: auto;
      @media (max-width: 479px) {
        height: auto;
    }
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
  .name_surname{
    display: flex;
    flex-direction:column;
    padding: 0 10px;
  }
  .video_review{
    position: relative;
    padding-top: 56.25% ;
    width: 100%;
  }
  .bootcamp_video_reviews_section{
      display: flex !important;
      flex-direction: column;
      align-items: center;
      width: 366.67px;
height: auto;
justify-content: center;
  }
  .react-player__preview {
    border-radius: 6px;
    background-repeat: no-repeat;
    box-shadow: 0px 3.01551px 11.3081px rgba(0, 0, 0, 0.15);
border-radius: 7.53876px;
  }
  h3{
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 0px;
      text-align: center;

  }
  h5{
    font-weight: normal;
font-size: 11px;
margin: 0px;
text-align: center;

  }
  p{
    font-weight: 500;
    font-size: 13px;
    text-align: center;
  }
 a{
     margin-top: 10px;
 }
 .slick-slide img {
    margin: auto;
    align-self: center;
  }
  .slick-slide {
    margin-right: 20px;
     width:366.67px;
    @media (max-width: 479px) {
      margin-right: 0px;
    }
  }
  .slick-slider{
    display:grid;
    grid-template-columns: repeat(11,1fr);
  }
  .slick-list{
    grid-area: 1/1/2/12;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-prev::before,
  .slick-next::before {
    color: var(--primaryColor);
    font-size: 40px;
  }
  .slick-next {
    right: 0;
    width: auto;
    height: auto;
    grid-area: 1/11/2/12;

  }
  .slick-prev {
    left: 0;
    z-index: 1;
    width: auto;
    height: auto;
    grid-area: 1/1/2/2;
  }
  .linkedin_section{
    display: flex;
    justify-content: center;
  }
`

export default Wrapper