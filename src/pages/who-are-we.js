import React from "react"
import styled from "styled-components"
import Banner2 from "../components/Banner2"
import BuildAbetterFuture from "../components/BuildAbetterFuture"
import OurApproach from "../components/OurApproach"
import OurWork from "../components/OurWork"
import SomeSection from "../components/SomeSection"
import { graphql } from "gatsby"
import GetInTouch from "../components/GetInTouch"
import OurReviewNames from "../components/OurReviewNames"
import Seo from "../components/Seo/seo"

function whoweare({ data, location }) {
  return (
    <Container>
      <Seo
        title="Who-are-we"
        description="We are a Team of renowned technology experts bringing you industry 
        excellence certifications, assessments and placement opportunities
        at MNC's across the world"
        location={`${location.pathname}`}
        image=""
      />
      <Banner2
        title={data.desc.nodes[0].title}
        desc={data.desc.nodes[0].main_Descrption}
        linktitle="BACK TO HOME"
        link="/"
        img={true}
      />
      <OurApproach
        title={data.ourapproach.nodes[0].title}
        shortDescrption={data.ourapproach.nodes[0].shortDescrption}
        img={
          data.ourapproach.nodes[0].ourApproach_media.localFile.childImageSharp
            .gatsbyImageData
        }
      />
      <OurWork
        title="get to know our people"
        data={data.allStrapiGetToknowOurpeople.nodes[0].GetToKnowOurPeople}
      />
      <BuildAbetterFuture
        title={data.future.nodes[0].title}
        shortDescrption={data.future.nodes[0].shortDescrption}
        img={
          data.future.nodes[0].buildingAbetterFuture_media.localFile
            .childImageSharp.gatsbyImageData
        }
      />
      <SomeSection
        img={
          data.section.nodes[0].Section_media.localFile.childImageSharp
            .gatsbyImageData
        }
        desc={data.section.nodes[0].descrption}
      />

      <OurReviewNames
        className="ourreviews"
        title="our reviews"
        data={data.allStrapiOurreviews.nodes[0].ourreview}
      />
      <GetInTouch />
    </Container>
  )
}

export default whoweare

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  > h1 {
    margin-top: 50px;
    border-bottom: 1px solid #ff002b;
    @media (max-width: 479px) {
      text-align: center;
      font-size: 17px;
    }
  }

  .ourreviews {
    @media (max-width: 479px) {
      margin-top: -5px !important;
    }
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
`
export const query = graphql`
  {
    allStrapiOurreviews {
      nodes {
        ourreview {
          descrption
          id
          title
          linkedIn_url
          company
          consulting_media {
            url
          }
        }
      }
    }
    desc: allStrapiHomebannervideos {
      nodes {
        title
        main_Descrption
      }
    }
    allStrapiGetToknowOurpeople {
      nodes {
        GetToKnowOurPeople {
          consulting_media {
            url
          }
          descrption
          id
          title
        }
      }
    }
    ourapproach: allStrapiWhoweareOurApproach {
      nodes {
        shortDescrption
        title
        ourApproach_media {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    future: allStrapiWhoweareBuildingAbetterFuture {
      nodes {
        title
        shortDescrption
        buildingAbetterFuture_media {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    section: allStrapiWhoweAreSection {
      nodes {
        descrption
        Section_media {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`
