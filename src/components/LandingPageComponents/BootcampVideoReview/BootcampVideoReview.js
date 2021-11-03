import React from "react"
import Wrapper from "./bootcampvideoreview.style"
import linkedin from "../../../images/linkedin.svg"
import ReactPlayer from "react-player/youtube"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function BootcampVideoReview({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Wrapper>
      <div className="bootcamp_video_review_heading">
        <h2 style={{fontSize: "26px"}}>video reviews</h2>
      </div>
      <div className="bootcamp_video_reviews_wrapper">
        <Slider {...settings}>
          {data.video_reviews.map((d) => (
            <div className="bootcamp_video_reviews_section">
              <lite-youtube
                style={{ borderRadius: "6px" }}
                params="controls=0&enablejsapi=1"
                videoplay="Mirar"
                videoid={d.video_link}
              ></lite-youtube>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#F5F4FD",
                  width: "100%",
                  padding: "0px 20px",
                  paddingBottom: "15px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "6px",
                }}
              >
                <div className="name_surname">
                  <h3>{d.name}</h3>
                  <h5>{d.designation}</h5>
                </div>
                <div className="linkedin_section">
                  <a href="https://certisured.com/">
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={linkedin}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  )
}

export default BootcampVideoReview
