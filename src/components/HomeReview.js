import React from "react"
import styled from "styled-components"
import NewReview from "./NewReview copy"
import WhatStudentsSay from "./WhatStudentsSay"

function HomeReview(props) {
  return (
    <Wrapper>
     
      <div className="review_for_desktop">
        <NewReview data={props.data} home={props.home} />
      </div>
      <div className="review_for_mobile">
        <WhatStudentsSay data={props.data}  home={props.home} />
      </div>
    </Wrapper>
  )
}

export default HomeReview
const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;

  .review_heading {
    grid-area: 1/2/2/6;
    margin-bottom: 3%;
    @media (max-width: 479px) {
      grid-area: 1/2/2/11;
    }
  }

  @media (min-width: 1200px) {
    .review_for_desktop {
      display: block;
      grid-area: 2/1/3/12;
    }
    .review_for_mobile {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    .review_for_mobile {
      display: block;
      grid-area: 2/1/3/12;
    }
    .review_for_desktop {
      display: none;
    }
  }
`
