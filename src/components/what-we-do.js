// import React from "react"
// import styled from "styled-components"
// import Banner2 from "../components/Banner2"
// import ConsultingG from "../components/ConsultingGrid"
// import GetInTouch from "../components/GetInTouch"
// import SoftwareDevelopmemtGrid from "../components/SoftwareDevelopmemtGrid"
// import TrainingOnEmergingTechnologyGrid from "../components/TrainingOnEmergingTechnologyGrid"
// import { graphql } from "gatsby"
// import Seo from "../components/Seo/seo"

// import scrollTo from "gatsby-plugin-smoothscroll"

// function Whatwedo({ data, location }) {
//   return (
//     <Container>
//       <Seo
//         title="What-we-do"
//         description={data.whatwecando.nodes[0].LongDescrption}
//         image={data.main.nodes[0].whatwecando[0].consulting_media[0].url}
//         location={`${location.pathname}`}
//       />
//       <Banner2
//         title={data.whatwecando.nodes[0].title}
//         desc={data.whatwecando.nodes[0].LongDescrption}
//         linktitle="BACK TO HOME"
//         link="/"
//         img={true}
//       />
//       <Wrapper>
//         <div className="anchor_tab">
//           <div className="anchor_tab_section">
//             <div>
//               <button
//                 className="borderFade"
//                 onClick={() => scrollTo("#consulting")}
//               >
//                 training
//               </button>
//             </div>
//             <div>
//               <button
//                 className="borderFade"
//                 onClick={() => scrollTo("#software")}
//               >
//                 assessment
//               </button>
//             </div>{" "}
//             <div>
//               <button
//                 className="borderFade"
//                 onClick={() => scrollTo("#training")}
//               >
//                 placement
//               </button>
//               {/* <Link to="training" className="link" >training</Link> */}
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//       <ConsultingG
//         title={data.main.nodes[0].whatwecando[0].title}
//         desc={data.main.nodes[0].whatwecando[0].descrption}
//         img={data.main.nodes[0].whatwecando[0].consulting_media[0].url}
//         link="/training"
//         linktitle="Learn More"
//         id="consulting"
//         image={true}
//       />

//       <SoftwareDevelopmemtGrid
//         id="software"
//         title={data.main.nodes[0].whatwecando[1].title}
//         desc={data.main.nodes[0].whatwecando[1].descrption}
//         image={true}
//         img={data.main.nodes[0].whatwecando[1].consulting_media[0].url}
//         linktitle="Learn More"
//         link="/assessment"
//       />
//       <TrainingOnEmergingTechnologyGrid
//         title={data.main.nodes[0].whatwecando[2].title}
//         desc={data.main.nodes[0].whatwecando[2].descrption}
//         img={data.main.nodes[0].whatwecando[2].consulting_media[0].url}
//         linktitle="Let's talk"
//         image={true}
//         links={true}
//         button={false}
//         id="training"
//       />
//       <GetInTouch id="letstalk" />
//     </Container>
//   )
// }

// export default Whatwedo
// export const query = graphql`
//   query whatwedo {
//     whatwecando: allStrapiHomeWhatwecando {
//       nodes {
//         title
//         shortDescrption
//         strapiId
//         LongDescrption
//       }
//     }
//     main: allStrapiWhatwecandoMainpage {
//       nodes {
//         whatwecando {
//           title
//           id
//           descrption
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
// const Wrapper = styled.div`
//   width: 100%;
//   height: 70px;
//   margin-top: -50px;
//   z-index: 1;
//   padding-bottom: 150px;
//   .anchor_tab {
//     display: grid;
//     grid-template-columns: repeat(11, 1fr);
//     grid-template-rows: 70px;
//     grid-column-gap: 5px;
//     grid-row-gap: 0px;
//   }
//   .anchor_tab_section {
//     grid-area: 1/7/2/12;
//     background-color: var(--secondaryColor);
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     @media (max-width: 991px) {
//       grid-area: 1/5/2/12;
//     }
//     @media (max-width: 767px) {
//       grid-area: 1/2/2/12;
//     }
//     @media (max-width: 479px) {
//       grid-area: 1/1/2/12;
//     }
//   }
//   .borderFade {
//     padding-bottom: 1px;
//     color: #fff;
//     position: relative;
//     border: none;
//     background: none;
//     cursor: pointer;
//     font-size: 20px;
//     font-family: var(--family);
//     font-weight: 600;
//     @media (max-width: 767px) {
//       font-size: 18px;
//     }

//     @media (max-width: 479px) {
//       font-size: 15px;
//     }
//   }

//   .borderFade::after {
//     content: "";
//     position: absolute;
//     height: 2px;
//     width: 100%;
//     left: 0;
//     bottom: 0;
//     opacity: 0;
//     transform: translateY(3px);
//     background: #fff;
//     transition: opacity 0.2s ease, transform 0.2s ease;
//   }

//   .borderFade:hover::after {
//     opacity: 1;
//     transform: translateY(0);
//   }

//   .button {
//     font-size: 20px;
//     color: white;
//     background: none;
//     border: none;
//     cursor: pointer;
//     @media (max-width: 767px) {
//       font-size: 18px;
//     }

//     @media (max-width: 479px) {
//       font-size: 15px;
//     }
//   }
// `
