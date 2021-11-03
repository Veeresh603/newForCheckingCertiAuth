// import React from "react"
// import styled from "styled-components"
// import { graphql } from "gatsby"
// import Banner2 from "../components/Banner2"
// import DemoClass from "../components/DemoClass"
// import ConsultingGrid from "../components/ConsultingGrid"
// import MessagefromInstructor from "../components/MessagefromInstructor"
// import OurReview from "../components/OurReview"
// import OurReviewNames from "../components/OurReviewNames"
// // import GetInTouch from "../components/GetInTouch"
// import TextBlock from "../components/TextBlock"
// import Seo from "../components/Seo/seo"
// // import Helmet from "react-helmet"
// import DemoClassInstamojo from "../components/DemoClassInstamojo"

// function Mldemo({ data, location }) {
//   return (
//     <Container>
//       <Seo
//         title={data.strapiMlDemoClass.banner.title}
//         location={`${location.pathname}`}

//         description={data.strapiMlDemoClass.instructor.descrption}
//       />
//       <Banner2
//         linktitle="BACK TO HOME"
//         link="/"
//         title={data.strapiMlDemoClass.banner.title}
//         image={data.strapiMlDemoClass.banner.banner_image.localFile.childImageSharp.gatsbyImageData}
//         img={false}
//         registration={data.strapiMlDemoClass.register_now_democlass.title}
//         event={data.strapiMlDemoClass.event_schedule.text}
//       />
//       <ConsultingGrid
//         style={{ marginTop: "100px" }}
//         title={data.strapiMlDemoClass.instructor.title}
//         desc={data.strapiMlDemoClass.instructor.descrption}
//         img={data.strapiMlDemoClass.instructor.consulting_media[0].url}
//         image={true}
//         links={true}
//         button={true}
//       />
//       <DemoClass
//         day={data.strapiMlDemoClass.demo_class_day[0].day}
//         data={data.strapiMlDemoClass.demo_class_day}
//         title={
//           data.strapiMlDemoClass.demo_class_day[0].main_heading.main_heading
//         }
//         img={data.strapiMlDemoClass.free_demo_class_image.localFile.childImageSharp.gatsbyImageData}
//         register={data.strapiMlDemoClass.Register_link_button}
//       />

//       <OurReviewNames
//         data={data.strapiMlDemoClass.review_images.review_image}
//         title={data.strapiMlDemoClass.review_images.title.main_heading}
//         image={true}
//       />
//       <MessagefromInstructor
//         videoUrl={data.strapiMlDemoClass.instructor_video.Instructor_video_url}
//         title={
//           data.strapiMlDemoClass.instructor_video.instructor_video_title
//             .main_heading
//         }
//       />
//       <OurReview
//         style={{ marginTop: "50px" }}
//         title={
//           data.strapiMlDemoClass.review_video.review_video_title.main_heading
//         }
//         data={data.strapiMlDemoClass.review_video.video_reviews}
//         course={true}
//       />

//       {/* <DemoClassCarousel
//         data={data.strapiMlDemoClass.demo_class_day}
//         img={data.strapiMlDemoClass.free_demo_class_image.childImageSharp.fluid}
//       /> */}
//       <TextBlock data={data.strapiMlDemoClass.demo_class_buttons} />
//       <DemoClassInstamojo
//         instamojoLink={data.strapiMlDemoClass.Register_link_button.slug_link}
//         instamojoLabel={
//           data.strapiMlDemoClass.Register_link_button.button_label
//         }
//         instamojoDesc={data.strapiMlDemoClass.instamojoTitle.text}
//         paypalDesc={data.strapiMlDemoClass.paypalTitle.text}
//       />
//       {/* <div className="bottom_wrapper">
//         <div className="bottom_section">
//           <div className="col1" id="register">
//             <p style={{color: "#fff"}}>Register for international students</p>
//             <a
//               id="head"
//               href={data.strapiMlDemoClass.Register_link_button.slug_link}
//               rel="im-checkout"
//               data-text={data.strapiMlDemoClass.Register_link_button.button_label}
//               data-css-style="color:var(--secondaryColor); background:var(--thirdColor); font-family: var(--family); width:auto; border-radius:4px"
//               data-layout="vertical"
//             ></a>
//           </div>
//           <div className="col2">
//           <p style={{color: "#fff"}}>Register for international students</p>

//             <div
//               id="paypal-button-container"
//               style={{ position: "relative", zIndex: "0" }}
//             ></div>
//           </div>
//         </div>
//       </div> */}
//     </Container>
//   );
// }

// export default Mldemo

// export const query = graphql`query SingleDemoclass($slug: String) {
//   strapiMlDemoClass(slug: {eq: $slug}) {
//     banner {
//       id
//       title
//       banner_image {
//         localFile{
//         childImageSharp {
//           gatsbyImageData(width: 1000, quality: 100, layout: CONSTRAINED)
//         }
//       }
//       }
//     }
//     demo_class_buttons {
//       Button_descrption
//       Button_label
//       id
//       slug
//     }
//     demo_class_day {
//       day
//       id
//       main_heading {
//         main_heading
//       }
//       free_demo_class {
//         descrption
//         id
//         title
//         icon {
//           url
//         }
//       }
//       panelNumber
//     }
//     free_demo_class_image {
//       localFile{
//       childImageSharp {
//         gatsbyImageData(width: 1000, quality: 100, layout: CONSTRAINED)
//       }
//     }
//     }
//     instructor {
//       descrption
//       id
//       title
//       consulting_media {
//         url
//       }
//     }
//     instructor_video {
//       instructor_video_title {
//         main_heading
//         id
//       }
//       Instructor_video_url
//       id
//     }
//     review_images {
//       title {
//         main_heading
//       }
//       review_image {
//         company
//         descrption
//         id
//         name
//         slug
//         review_image {
//           url
//         }
//       }
//     }
//     review_video {
//       review_video_title {
//         main_heading
//       }
//       video_reviews {
//         Youtube_url
//         name
//       }
//     }
//     register_now_democlass {
//       title
//       dateAndTime(formatString: "")
//       id
//     }
//     Register_link_button {
//       button_label
//       slug_link
//     }
//     event_schedule {
//       text
//     }
//     paypalTitle {
//       text
//     }
//     instamojoTitle {
//       text
//     }
//   }
// }
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

