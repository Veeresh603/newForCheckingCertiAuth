// import React from "react"
// import styled from "styled-components"

// import Seo from "../components/Seo/seo"
// import CourseTab from "../components/CourseTab/index"
// import Hero from "../components/Hero/hero"
// import { graphql } from "gatsby"

// function Course({ data, location }) {
//   const {
//     title,
//     overview,
//     author,
//     curriculum,
//     course_image,
//     id,
//     slug,
//     button,
//     seo,
//   } = data.strapiCourse
//   const keys = []
//   const keys1 =
//     seo === null ? seo.title : seo.keywords.map((k) => keys.push(k.title))
//   return (
//     <Wrapper>
//       {seo && (
//         <Seo
//           title={seo.title}
//           location={`${location.pathname}`}
//           image={seo.image === null ? "" : seo.image.url}
//           description={seo.short_description}
//         />
//       )}
//       <Hero
//         title={title}
//         banner={course_image.localFile.childImageSharp.gatsbyImageData}
//         link="/training"
//         linktitle="BACK TO TRAINING"
//       />
//       <CourseTab
//         title={title}
//         overview={overview}
//         curriculum={curriculum}
//         author={author}
//         id={id}
//         slug={slug}
//         button={button}
//       />
//     </Wrapper>
//   )
// }

// export default Course

// const Wrapper = styled.div`
//   display: flex;
//   box-sizing: border-box;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   width: 100%;
//   height: auto;
// `
// export const query = graphql`
//   query SingleCourse($slug: String) {
//     strapiCourse(slug: { eq: $slug }) {
//       seo {
//         id
//         short_description
//         title
//         keywords {
//           title
//         }
//         image {
//           url
//         }
//       }
//       title
//       id
//       slug
//       overview
//       button {
//         button_label
//         slug_link
//         id
//       }
//       curriculum {
//         id
//         panel
//         title
//         subtopic {
//           id
//           subTopic
//           topic
//           id
//         }
//       }
//       course_image {
//         localFile {
//           childImageSharp {
//             gatsbyImageData(
//               formats: [AUTO, WEBP, AVIF]
//               quality: 100
//               placeholder: TRACED_SVG
//               layout: FULL_WIDTH
//             )
//           }
//         }
//       }
//       author {
//         name
//         descrption
//         author_image {
//           url
//         }
//         rating
//       }
//     }
//   }
// `
