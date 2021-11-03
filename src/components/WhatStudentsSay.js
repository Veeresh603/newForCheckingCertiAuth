import React from "react"
import styled from "styled-components"
import HeadingBorder from "./HeadingBorderAnim"
import { GatsbyImage } from "gatsby-plugin-image"
import linkedin from "../images/linkedin.svg"
import StarRatings from "react-star-ratings"

function WhatStudentsSay({ data, home }) {
  const imagesLength = data.allreview.length
  const imageEnd = imagesLength - 1
  const [imageIndex, setImageIndex] = React.useState(1)

  return (
    <Wrapper>
      <div className="heading">
        {home && <HeadingBorder>what students say</HeadingBorder>}
      </div>
      <div className="what_students_say_wrapper">
        {data.allreview.map((d, id) => (
          <div
            className="what_students_say_image"
            id={
              id === imageIndex
                ? "active"
                : id === imageIndex + 1
                ? "prev"
                : "next"
            }
          >
            <GatsbyImage
              style={{
                borderRadius: "6px",
              }}
              image={d.picture[0].localFile.childImageSharp.gatsbyImageData}
              alt={d.name}
            />
          </div>
        ))}
      </div>
      <div className="button_wrapper">
        <div
          className="prev_button"
          onClick={() =>
            imageIndex <= 0
              ? setImageIndex(imagesLength - 1)
              : setImageIndex(imageIndex - 1)
          }
        />
        <div
          className="next_button"
          onClick={() =>
            imageIndex === imageEnd
              ? setImageIndex(1)
              : setImageIndex(imageIndex + 1)
          }
        />
      </div>
      <div className="description">
        <div className="star_rating">
          <StarRatings
            rating={data.allreview[imageIndex].rating}
            starDimension="30px"
            starSpacing="3px"
            starRatedColor="#FFD400"
          />
        </div>
        <h4 style={{ fontWeight: "300" }}>
          {data.allreview[imageIndex].descrption}
        </h4>
        <div className="review_name">
          <h4>{data.allreview[imageIndex].name}</h4>
          <h5>{data.allreview[imageIndex].company}</h5>
        </div>
        <div className="linkedin_icon">
          <a href={data.allreview[imageIndex].linkedInUrl}>
            <img
              style={{ width: "30px", height: "30px" }}
              src={linkedin}
              alt={data.allreview[imageIndex].linkedInUrl}
            />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default WhatStudentsSay

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  .heading {
    grid-area: 1/2/2/11;
    display: flex;
    justify-content: flex-start;
  }
  .what_students_say_wrapper {
    grid-area: 2/2/3/11;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .what_students_say_image {
      display: block;
      width: 250px;
      height: 250px;
      position: absolute;
      transition: all 0.5s ease-in-out;
      box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.29);
      border-radius: 6px;

      img {
        height: 250px !important;
      }
      .gatsby-image-wrapper {
        width: 100%;
        height: 250px !important;
      }
    }
    #active {
      z-index: 99;
      opacity: 1;
      transform: translateX(0);
    }
    #next {
      transform: translateX(60px) scale(0.8);
      transition: all 0.5s ease;
      opacity: 1;
      z-index: 1;
    }
    #prev {
      transform: translateX(-60px) scale(0.8);
      transition: all 0.5s ease;
      opacity: 1;
      z-index: 1;
    }
  }
  .button_wrapper {
    grid-area: 3/1/4/12;
    padding: 0 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    .prev_button {
      width: 30px;
      height: 30px;
      transform: rotate(-45deg);
      border-left: 1px solid var(--secondaryColor);
      border-top: 1px solid var(--secondaryColor);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .prev_button::after {
      content: "";
      transform: rotate(45deg) translateX(9px);

      width: 60px;
      height: 1px;
      background-color: var(--secondaryColor);
      position: absolute;
    }
    .next_button {
      width: 30px;
      height: 30px;
      transform: rotate(-45deg);
      border-right: 1px solid var(--secondaryColor);
      border-bottom: 1px solid var(--secondaryColor);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .next_button::before {
      content: "";
      transform: rotate(45deg) translateX(-10px);

      width: 60px;
      height: 1px;
      background-color: var(--secondaryColor);
      position: absolute;
    }
  }
  .description {
    grid-area: 4/2/5/11;
    transition: 0.2s ease-in-out;
    .review_name {
      border-bottom: 1px solid #d7d7d7;
      h4 {
        color: var(--secondaryColor);
        font-weight: 600;
        font-size: 1rem;
        margin: 0;
      }
      h5 {
        margin-top: 5px;
        font-weight: 600;
        font-size: 1rem;
      }
    }
    .linkedin_icon {
      margin-top: 10px;
    }

    h4 {
      font-weight: 500;
      font-size: 1rem;
    }
  }
`

// import styled from "styled-components"
// import StarRatings from "react-star-ratings"
// import linkedin from "../images/linkedin.svg"
// import ReactMarkdown from "react-markdown"
// import loadable from "@loadable/component"
// import HeadingBorder from "./HeadingBorderAnim"
// import LeftArrow from "./LeftArrow"
// import RightArrow from "./RightArrow"
// import { GatsbyImage } from "gatsby-plugin-image"

// const Slider = loadable(() => import("./helper/react-slick"))

// function WhatStudentsSay({ data, home }) {
//   const slider = React.useRef(null)

//   var settings = {
//     infinite: true,
//     autoplay: true,
//     pauseOnHover: true,
//     centerPadding: "10px",
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     nextArrow: <LeftArrow slider={slider} />,
//     prevArrow: <RightArrow slider={slider} />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }
//   return (
//     <Wrapper>
//       <div className="heading">
//         {home && <HeadingBorder>what students say</HeadingBorder>}
//       </div>
//       <div className="what_students_say_wrapper">
//         <Slider ref={slider} {...settings}>
//           {data.allreview.map((d) => (
//             <div className="what_students_say_section">
//               <div className="what_students_say_image">
//                 <GatsbyImage
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderTopLeftRadius: "6px",
//                     borderTopRightRadius: "6px",
//                   }}
//                   image={d.picture[0].localFile.childImageSharp.gatsbyImageData}
//                   alt={d.name}
//                 />
//               </div>
//               {/* <div
//             className="what_students_say_image"
//             style={{ backgroundImage: `url(${d.picture[0].url})` }}
//           ></div> */}
//               <div className="what_students_say_description">
//                 <StarRatings
//                   rating={d.rating}
//                   starDimension="25px"
//                   starSpacing="3px"
//                   starRatedColor="#FFD400"
//                 />
//                 <ReactMarkdown>{d.descrption}</ReactMarkdown>
//                 <div style={{ borderBottom: "1px solid #d7d7d7" }}>
//                   <h4>{d.name}</h4>
//                   <h5>{d.company}</h5>
//                 </div>
//                 <div className="linkedin_icon">
//                   <a href={d.linkedInUrl}>
//                     <img
//                       style={{ width: "30px", height: "30px" }}
//                       src={linkedin}
//                       alt={d.name}
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </Wrapper>
//   )
// }

// export default WhatStudentsSay

// const Wrapper = styled.div`
//   width: 100%;
//   height: auto;
//   display: grid;
//   grid-template-columns: repeat(11, 1fr);
//   grid-template-rows: auto;
//   box-sizing: border-box;
//   .heading {
//     grid-area: 1/2/2/11;
//     display: flex;
//     justify-content: flex-start;
//   }
//   .what_students_say_wrapper {
//     grid-area: 2/2/3/11;
//     display: flex;
//     flex-direction: row;
//     margin-top: 4%;
//   }
//   .what_students_say_section {
//     width: 259.67px;
//     min-height: 500px;
//     background-color: #f1f1f1;
//     border-radius: 6px;
//   }
//   .what_students_say_image {
//     background-position: center;
//     background-size: cover;
//     height: 300px;
//     border-radius: 6px;
//   }
//   img {
//     width: 100%;
//     height: auto;
//   }
//   .what_students_say_description {
//     padding: 16px;
//   }
//   h4 {
//     font-size: 18px;
//     font-weight: 500;
//     margin-bottom: 0;
//   }
//   h5 {
//     font-size: 15px;
//     font-weight: 500;
//     margin: 0;
//     padding-bottom: 10px;
//   }
//   .linkedin_icon {
//     margin-top: 10px;
//     display: flex;
//   }
//   .slick-slide img {
//     margin: auto;
//     align-self: center;
//   }
//   .slick-slide {
//     margin-right: 20px;
//     margin-left: 20px;
//     width: 366.67px;
//     @media (max-width: 479px) {
//       margin-right: 10px;
//       margin-left: 10px;
//     }
//   }
//   .slick-slider {
//     display: grid;
//     grid-template-columns: repeat(11, 1fr);
//   }
//   .slick-list {
//     grid-area: 1/1/2/12;
//   }
//   .slick-track {
//     display: flex;
//     align-items: center;
//   }

//   .main_left_wrapper {
//     position: absolute;
//     top: 28%;
//     right: 7%;
//     @media (max-width: 479px) {
//       right: -5%;
//       top: 41%;
//     }
//   }

//   .main_right_wrapper {
//     position: absolute;
//     top: 28%;
//     left: 7%;
//     @media (max-width: 479px) {
//       left: -5%;
//       top: 41%;
//     }
//   }
// `
