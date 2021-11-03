// import React from "react"
// import styled from "styled-components"
// import Banner2 from "../components/Banner2"
// import { graphql } from "gatsby"
// import OurWork from "../components/OurWork"
// import GetInTouch from "../components/GetInTouch"
// import TechnologyStackCarousel from "../components/TechnologyStackCarousel"
// import Seo from "../components/Seo/seo"
// import ConsultingG from "../components/ConsultingGrid"

// function Training({ data, location }) {
//   return (
//     <Container>
//       <Seo
//         title="Training"
//         description={data.desc.nodes[0].longDescrption}
//         location={`${location.pathname}`}
//         image={
//           data.main.nodes[0].trainingOnEmergingTechnologies.consulting_media[0]
//             .url
//         }
//       />
//       <Banner2
//         // img={data.allStrapiCourse.nodes[0].banner_img.childImageSharp.fluid}
//         title={data.main.nodes[0].title}
//         desc={data.desc.nodes[0].longDescrption}
//         linktitle="BACK TO HOME"
//         link="/"
//         img={true}
//       />
//       <ConsultingG
//         style={{ marginTop: "50px" }}
//         title={data.main.nodes[0].trainingOnEmergingTechnologies.title}
//         img={
//           data.main.nodes[0].trainingOnEmergingTechnologies.consulting_media[0]
//             .url
//         }
//         desc={data.main.nodes[0].trainingOnEmergingTechnologies.descrption}
//         button={true}
//         links={true}
//         image={true}
//       />
//       <OurWork
//         style={{ marginTop: "100px" }}
//         title="certification programs"
//         data={data.allStrapiCourse}
//         course={true}
//       />

//       <OurWork
//         style={{ marginTop: "100px" }}
//         title="bootcamps"
//         data={data.allStrapiBootcamp.nodes[0].bootcamp}
//         course={false}
//       />
//       <TechnologyStackCarousel
//         data={
//           data.allStrapiTechnologyStack.nodes[0].Training_technologyStack_media
//             .technologyStack_media
//         }
//         title={
//           data.allStrapiTechnologyStack.nodes[0].Training_technologyStack_media
//             .text
//         }
//       />

//       <GetInTouch />
//     </Container>
//   )
// }

// export default Training
// export const query = graphql`
//   query training {
//     desc: allStrapiHomeTraining {
//       nodes {
//         longDescrption
//         title
//       }
//     }

//     main: allStrapiTrainingMainPage {
//       nodes {
//         title
//         trainingOnEmergingTechnologies {
//           title
//           id
//           descrption
//           consulting_media {
//             url
//           }
//         }
//       }
//     }
//     allStrapiCourse {
//       nodes {
//         rating
//         id
//         short_descrption
//         title
//         slug
//         course_image {
//           url
//         }
//         author {
//           rating
//           name
//           author_image {
//             url
//           }
//         }
//       }
//     }
//     allStrapiOurreviews {
//       nodes {
//         ourreview {
//           descrption
//           id
//           title
//           consulting_media {
//             url
//           }
//         }
//       }
//     }
//     allStrapiTechnologyStack {
//       nodes {
//         Training_technologyStack_media {
//           technologyStack_media {
//             technologyStack_media {
//               url
//             }
//             id
//           }
//           text
//         }
//       }
//     }
//     allStrapiBootcamp {
//       nodes {
//         bootcamp {
//           title
//           descrption
//           id
//           consulting_media {
//             url
//           }
//         }
//       }
//     }
//   }
// `
// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   overflow: hidden;
//   height: auto;
//   align-items: flex-start;
//   flex-direction: column;
//   justify-content: flex-start;
//   flex-wrap: wrap;

//   > h1 {
//     margin-top: 50px;
//     border-bottom: 1px solid #ff002b;
//     @media (max-width: 479px) {
//       text-align: center;
//       font-size: 17px;
//     }
//   }

//   @media (max-width: 991px) {
//     flex-wrap: wrap;
//     overflow: hidden;
//   }
// `
