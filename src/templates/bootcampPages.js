import React from "react"
import styled from "styled-components"
import AboutBootCamp from "../components/BootcampLandingPages/AboutBootcamp"
import BootcampBanner from "../components/LandingPageComponents/BootcampBanner"
import BootcampCurriculum from "../components/LandingPageComponents/BootcampCurriculumComponent/BootcampCurriculum"
import BootcampHighlights from "../components/LandingPageComponents/BootcampHighlights"
import LanguageTools from "../components/LandingPageComponents/LanguageTools"
import WhyDiscord from "../components/LandingPageComponents/WhyDiscordComponent/WhyDiscord"
import { graphql } from "gatsby"
import BootcampInstructor from "../components/LandingPageComponents/BootcampAboutInstructor/BootcampInstructor"
import BootcampReviews from "../components/LandingPageComponents/BootcampReviews"
import BootcampVideoReview from "../components/LandingPageComponents/BootcampVideoReview/BootcampVideoReview"
import BootcampFrequentlyAsked from "../components/LandingPageComponents/BootcampFrequentlyAsked/BootcampFrequentlyAsked"
import BootcampPricing from "../components/BootcampLandingPages/BootcampPricing"
import Seo from "../components/Seo/seo"
import BootcampEvents from "../components/BootcampLandingPages/BootcampEvents"

function bootcampPages({ data, location }) {
  const {
    bootcamp_banner,
    why_discord,
    bootcamp_pricing,
    bootcamp_highlights,
    tools_covered,
    about_bootcamp1,
    bootcamp_core_curriculum,
    bootcamp_days,
    slug,
    bootcamp_about_instructor,
    allreview,
    video_review,
    bootcamp_faq,
    bootcamp_pricing_lists,
    bootcamp_offers,
    seo,
  } = data.strapiBootcampLandingPages
  const keys = []
  const keys1 =
    seo === null ? seo.title : seo.keywords.map((k) => keys.push(k.title))
  return (
    <Container>
      {seo && (
        <Seo
          title={seo.title}
          description={seo.short_description}
          location={`${location.pathname}`}
          image={seo.image === null ? "" : seo.image.url}
          keywords={keys}
        />
      )}
      <Wrapper>
        <BootcampBanner data={bootcamp_banner} />
        <BootcampHighlights data={bootcamp_highlights} />
        <LanguageTools data={tools_covered} />
        <AboutBootCamp data={about_bootcamp1} />
        <WhyDiscord data={why_discord} id={why_discord.title} />
        <BootcampCurriculum
          data={bootcamp_core_curriculum}
          days={bootcamp_days}
          slug={slug}
          brouchre={false}
          onSrollDown4="pricing1"
        />
        <BootcampInstructor data={bootcamp_about_instructor} />
        <BootcampReviews data={allreview} />
        <BootcampVideoReview data={video_review} />
        <BootcampFrequentlyAsked
          data={bootcamp_faq}
          slug={slug}
          button={false}
        />
        <BootcampEvents data={bootcamp_offers} onSrollDown3="pricing1" />
        <BootcampPricing
          data={bootcamp_pricing}
          pricing={bootcamp_pricing_lists}
          slug={slug}
          title={bootcamp_banner.title}
          span={bootcamp_banner.span}
          id={bootcamp_pricing.title}
        />
      </Wrapper>
    </Container>
  )
}

export default bootcampPages

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  > h1 {
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
  query bootcampLanding($slug: String) {
    strapiBootcampLandingPages(slug: { eq: $slug }) {
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
      bootcamp_banner {
        bootcamp_banner_desc
        title
        span
        video_link
        why_discord_button {
          button_label
          slug_link
        }
        Register_button {
          button_label
          slug_link
        }
      }
      about_bootcamp1 {
        about_bootcamp_desc
        span
        title
        about_bootcamp_events1 {
          title
          description
        }
        about_bootcamp_media {
          url
        }
      }
      allreview {
        allreview {
          company
          descrption
          linkedInUrl
          rating
          name
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
      bootcamp_about_instructor {
        span
        title
        about_instuctor {
          company
          descrption
          name
          slug
          review_image {
            url
          }
        }
      }
      bootcamp_core_curriculum {
        description
        span
        title
      }
      bootcamp_days {
        title
        bootcamp_session {
          title
          session
          id
        }
        id
      }
      bootcamp_offers {
        description
        span
        title
        video_link
        event_date_time {
          description
          id
          title
          date_and_time
          button_label
        }
      }
      bootcamp_faq {
        main_heading
        span
        title
        frequenty_asked_question {
          description
          id
          title
        }
      }
      bootcamp_highlights {
        span
        title
        highlights_desc {
          main_heading
        }
      }
      bootcamp_pricing {
        description
        span
        title
        id
      }
      bootcamp_pricing_lists {
        background_color_code
        currency_icon
        everything_in_standard_plus
        short_desc
        starts_at
        title
        stripe_price_id {
          button_label
          slug_link
          id
        }
        points {
          title
        }
      }
      slug
      tools_covered {
        text
        technologyStack_media {
          technologyStack_media {
            url
          }
        }
      }
      video_review {
        category_name
        video_reviews {
          description
          designation
          id
          name
          video_link
        }
      }
      why_discord {
        span
        title
        video_link
        why_discord_description
      }
    }
  }
`
