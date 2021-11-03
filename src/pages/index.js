import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import TechnologyStackCarousel from "../components/TechnologyStackCarousel"
import WhoWeAre from "../components/WhoWeAre/index"
import WhatWeAreThinking from "../components/WhatWeAreThinking/WhatWeAreThinking"
import Seo from "../components/Seo/seo"
import HomeBanner from "../components/HomeBanner"
import HomeReview from "../components/HomeReview"

import Alltrending from "../components/AlltrendingCertificate/AllTrendingCertificte"
import LatestNews from "../components/LatestNews"

function Index({ data, location }) {
  const keys = []
  const keys1 =
    data.strapiHome.seo === null
      ? data.strapiHome.seo.title
      : data.strapiHome.seo.keywords.map((k) => keys.push(k.title))
  return (
    <Wrapper>
      {data.strapiHome.seo && (
        <Seo
          title={data.strapiHome.seo.title}
          description={data.strapiHome.seo.short_description}
          image={data.strapiHome.seo.image.url}
          location={`${location.pathname}`}
          keywords={keys}
        />
      )}
      <Container>
        <HomeBanner />
        <TechnologyStackCarousel
          data={
            data.allStrapiTechnologyStack.nodes[0].technologyStack_media
              .technologyStack_media
          }
          title={
            data.allStrapiTechnologyStack.nodes[0].technologyStack_media.text
          }
        />
        <Alltrending />
        <LatestNews news={data.news.nodes[0]} />
        <HomeReview data={data.strapiHome.allreview} home={true} />
        <WhoWeAre
          title={data.whoweare.nodes[0].title}
          shortDescrption={data.whoweare.nodes[0].shortDescrption}
          link="/who-are-we"
          linktitle="Get to know us"
        />
        <WhatWeAreThinking
          title={data.whatweare.title}
          news={data.news.nodes[0].newsupdate}
          video_review={data.allStrapiVideoReviews.nodes}
          discord={data.allStrapiHomeDiscords.nodes[0]}
        />

        {/* <FormDialog
          mobileWrapperTop="100px"
          id="letstalk"
          title="let's talk"
          action="https://formspree.io/f/mnqlqnrp"
          url="https://certisured.com/"
          value="let's talk"
          desc="Please contact us for any queries. Our executives will get back to you with all the answers"
        />  */}
      </Container>
    </Wrapper>
  )
}

export default Index
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 150px;
  overflow: hidden;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  place-items: center;
  @media (max-width: 479px) {
    grid-row-gap: 100px;
  }

  > h1 {
    /* margin-top: 50px; */
    border-bottom: 1px solid #ff002b;
    @media (max-width: 479px) {
      text-align: center;
      font-size: 17px;
    }
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
  @media (min-width: 1930px) {
    width: 80%;
  }
`
export const query = graphql`
  query homeQuery {
    allStrapiTechnologyStack {
      nodes {
        technologyStack_media {
          technologyStack_media {
            id
            technologyStack_media {
              url
            }
          }
          text
        }
      }
    }
    news: allStrapiNewsUpdate {
      nodes {
        id
        newsupdate {
          id
          news_update_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          news_descrption
          panel
          topic
          starts_at
          show_date_and_time
          link_to
        }
        title
      }
    }
    whoweare: allStrapiHomebannervideos {
      nodes {
        shortDescrption
        title
        strapiId
        main_Descrption
      }
    }
    whatweare: strapiHomeWhatweare {
      title
    }
    allStrapiVideoReviews {
      nodes {
        category_name
        video_reviews {
          description
          designation
          id
          name
          video_link
        }
        id
      }
    }
    allStrapiHomeDiscords {
      nodes {
        button_label
        button_link
        description
        popup_message_description
        title
      }
    }
    strapiHome {
      allreview {
        allreview {
          company
          descrption
          id
          linkedInUrl
          name
          rating
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            url
          }
        }
      }
      seo {
        id
        short_description
        title
        keywords {
          title
        }
        image {
          url
        }
      }
    }
  }
`
