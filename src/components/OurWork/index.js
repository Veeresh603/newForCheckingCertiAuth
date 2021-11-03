import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";


function OurWork(props) {
  const { data } = props
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
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
    <Wrapper style={!props.style ? null : props.style}>
      <div className="grid_section">
      <div className="heading">
        <h2 className="borderLeftRight">{props.title}</h2>
      </div>
     
      </div>
     
      {!props.course ? (
        <Slider {...settings}>
          {data.map(d => {

            return (
              <div className="first" key={d.id}>
                <h3>{d.title}</h3>
                {!d.review_image ? (
                  <img src={d.consulting_media[0].url} alt="" />
                ) : (
                  <GatsbyImage image={d.review_image.childImageSharp.gatsbyImageData} />
                )}
                <div className="text">
                  <Link to={d.slug}>
                    <h4>{d.descrption}</h4>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <Slider {...settings}>
          {data.nodes.map(course => {
            return (
              <div className="first" key={course.id}>
                <h3>{course.title}</h3>
                <img
                  className={course.id}
                  src={course.course_image.url}
                  alt={course.title}
                />
                <div className="text">
                  <Link to={course.slug}>
                    <h4>{course.short_descrption}</h4>
                  </Link>
                </div>
              </div>
            )
          })}
        </Slider>
      )}
     
    </Wrapper>
  );
}

export default OurWork

const Wrapper = styled.div`
  /* margin-top:100px; */
  width: 100%;
  height: auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 479px) {
    width: 100%;
    padding: 20px 0;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  .first {
    width: 370px;
    height: auto;
    outline: none;
    @media (max-width: 479px) {
      /* width:400px !important; */
    }
  }

  .first:hover {
    h4 {
      background-color: var(--primaryColor);
      color: var(--secondaryColor);
      transition: 0.5s ease-in-out;
    }
  }
  .grid_section{
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
  }
  .carousel_section{
    grid-area:2/2/3/11;
  }
  .text {
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-end;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }
  h4 {
    width: 90%;
    background-color: #f8f8f8;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    color: #111111;
    height: auto;
    padding: 20px;
    margin-top: -25px;
    font-size: 12px;
    z-index: 1;
    font-weight: 400;
    border-radius: 6px;
    text-align: justify;
    @media (max-width: 991px) {
      width: 90%;
      font-size: 10px;
      height: auto;
    }
  }
  .heading {
    width: auto;
    grid-area: 1/2/2/11;
    @media (max-width: 479px){
     display: flex;
     justify-content: center;
   }
  }
  h2 {
    color: var(--primaryColor);
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 25px;
    width: auto;
    text-transform: lowercase;
  }
  h3 {
    font-size: 12px;
    font-weight: 600;
  }
  .slick-slide img {
    margin: auto;
    align-self: center;
  }
  .slick-slide {
    margin-right: 20px;
    @media (max-width: 479px) {
      margin-right: 0px;
    }
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  a {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    outline: none;
  }
  .bg__header {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0.7; */
    @media (max-width: 991px) {
      height: 300px;
    }
    @media (max-width: 479px) {
      height: 380px;
    }
  }
  .slick-slider{
    display:grid;
    grid-template-columns: repeat(11,1fr);
  }
  .slick-list{
    grid-area: 1/2/2/11;
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
    grid-area: 1/10/2/11;

  }
  .slick-prev {
    left: 0;
    z-index: 1;
    width: auto;
    height: auto;
    grid-area: 1/2/2/3;

  }
`
