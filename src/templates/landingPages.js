import React from "react"
import styled from "styled-components"
import AboutBootCamp from "../components/LandingPageComponents/AboutBootCamp"
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
import BootcampPricing from "../components/LandingPageComponents/BootcampPricing"
import Seo from "../components/Seo/seo"

function bootcamp({ data, location }) {
  const {
    bootcamp_banner,
    bootcamp_highlights,
    tools_covered,
    about_bootcamp,
    why_discord,
    bootcamp_core_curriculum,
    bootcamp_days,
    bootcamp_about_instructor,
    video_review,
    allreviews,
    bootcamp_frequently_asked_question,
    bootcamp_pricing,
    slug,
    pricing_lists,
    demo_class_info,
    seo,
  } = data.strapiBootcampPages
  const keys = []
  const keys1 =
    seo === null ? "title" : seo.keywords.map((k) => keys.push(k.title))

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
        <AboutBootCamp data={about_bootcamp} />
        <WhyDiscord data={why_discord} id={why_discord.title} />
        <BootcampCurriculum
          data={bootcamp_core_curriculum}
          days={bootcamp_days}
          slug={slug}
        />
        <BootcampInstructor data={bootcamp_about_instructor} />
        <BootcampReviews data={allreviews} />
        <BootcampVideoReview data={video_review} />
        <BootcampFrequentlyAsked
          data={bootcamp_frequently_asked_question}
          brochure={bootcamp_core_curriculum.curriculum_brochure}
          slug={slug}
          button={true}
        />
        <BootcampPricing
          data={bootcamp_pricing}
          pricing={pricing_lists}
          demo_class_info={demo_class_info}
          slug={slug}
          title={bootcamp_banner.title}
          span={bootcamp_banner.span}
          brochure={
            bootcamp_core_curriculum.curriculum_brochure.brochure_media
              .publicURL
          }
          id={bootcamp_pricing.title}
        />
      </Wrapper>
    </Container>
  )
}

export default bootcamp

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
  query SingleBootcamp($slug: String) {
    strapiBootcampPages(slug: { eq: $slug }) {
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
      slug
      bootcamp_banner {
        bootcamp_banner_desc

        id
        span
        title
        video_link
        Register_button {
          button_label
          id
          slug_link
        }
        why_discord_button {
          button_label
          id
          slug_link
        }
      }
      bootcamp_highlights {
        id
        span
        title
        highlights_desc {
          id
          main_heading
        }
      }
      tools_covered {
        id
        text
        technologyStack_media {
          id
          technologyStack_media {
            url
          }
        }
      }
      about_bootcamp {
        about_bootcamp_desc

        id
        span
        title
        about_bootcamp_event {
          descrption
          id
          title
        }
        about_bootcamp_image {
          url
        }
      }
      why_discord {
        id
        span
        title
        video_link
        why_discord_description
      }
      bootcamp_core_curriculum {
        description
        id
        span
        title
        curriculum_brochure {
          after_submitting_message
          description
          id
          title
          download_link
          button_label
          brochure_media {
            url
          }
        }
      }
      bootcamp_days {
        description
        id
        title
        bootcamp_session {
          id
          session
          title
        }
      }
      bootcamp_about_instructor {
        id
        span
        title
        about_instuctor {
          company
          descrption
          id
          name
          slug
          review_image {
            url
          }
        }
      }
      allreviews {
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
      video_review {
        video_reviews {
          description
          designation
          id
          name
          video_link
        }
      }
      bootcamp_frequently_asked_question {
        span
        title
        main_heading

        frequenty_asked_question {
          description
          id
          title
        }
      }
      pricing_lists {
        id
        everything_in_standard_plus
        background_color_code
        short_desc
        starts_at
        title
        currency_icon
        stripe_price_id {
          button_label
          id
          slug_link
        }
        points {
          id
          title
        }
      }
      bootcamp_pricing {
        description

        span
        title
      }

      demo_class_info {
        after_submitting_message
        desciption
        make_visible
        popup_modal_short_description
        popup_modal_title
        title
        button {
          button_label
        }
      }
    }
  }
`
