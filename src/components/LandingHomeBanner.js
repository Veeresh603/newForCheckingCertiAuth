import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import loadable from "@loadable/component"
import { useStaticQuery, graphql } from "gatsby"
const Slider = loadable(() => import("./helper/react-slick"))

function LandingHomeBanner() {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "d2.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img2: file(relativePath: { eq: "d3.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img3: file(relativePath: { eq: "d4.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img4: file(relativePath: { eq: "d5.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img5: file(relativePath: { eq: "d6.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img6: file(relativePath: { eq: "2.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img7: file(relativePath: { eq: "3.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img8: file(relativePath: { eq: "4.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img9: file(relativePath: { eq: "5.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      img10: file(relativePath: { eq: "6.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
    }
  `)
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerPadding: "10px",
    accessibility: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className="home_banner_for_desktop">
        <Slider {...settings}>
          {}
          <div className="landing_home_banner">
            <GatsbyImage
              image={data.img1.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner">
            <GatsbyImage
              image={data.img2.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner">
            <GatsbyImage
              image={data.img3.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner">
            <GatsbyImage
              image={data.img4.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner">
            <GatsbyImage
              image={data.img5.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
        </Slider>
      </div>

      {/* for mobile */}
     <div className="home_banner_for_mobile">
        <Slider {...settings}>
          <div className="landing_home_banner1">
            <GatsbyImage
              image={data.img6.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner1">
            <GatsbyImage
              image={data.img7.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner1">
            <GatsbyImage
              image={data.img8.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner1">
            <GatsbyImage
              image={data.img9.childImageSharp.gatsbyImageData}
              alt="Certisured Home Banner"
            />
          </div>
          <div className="landing_home_banner1">
            <GatsbyImage
              image={data.img10.childImageSharp.gatsbyImageData}
              alt="Certisured Home Baner"
            />
          </div>
        </Slider>
      </div> 
    </Wrapper>
  )
}

export default LandingHomeBanner

const Wrapper = styled.div`
  display: grid;
  min-height: 500px;

  width: 80%;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 100px;
    width: 100%;
    min-height: 300px;
  }
  @media (max-width: 479px) {
    width: 100%;
  }
  .landing_home_banner {
    grid-area: 1/2/2/11;
    display: flex !important;
    background-size: contain;
    background-position: center;
    height: auto;
    justify-content: center;
    min-height: 550px;
  }
  .home_banner_for_desktop {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    min-width: 1000px;
    align-items: center;
    justify-content: center;
    @media (max-width: 479px) {
      display: none;
    }
  }
  .home_banner_for_mobile {
    display: none;
    position: relative;
    @media (max-width: 479px) {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: auto;
      width: 100%;
      align-items: center;
      justify-content: center;
      position: relative;
      min-height: 300px;
      min-width: 300px;
    }
    .landing_home_banner1 {
      position: relative;
    }
    .back {
      position: absolute;
      width: 100%;
      height: 300px;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
    }
  }
  .slick-slider {
    grid-area: 1/1/2/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
  }
  .slick-list {
    grid-area: 1/1/2/12;
  }
  .slick-dots {
    bottom: 24px;
    @media (max-width: 767px) {
      bottom: 0px;
    }
  }
`
