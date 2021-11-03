import React from 'react'
import styled from "styled-components"
import NewReview from '../NewReview copy';
import WhatStudentsSay from '../WhatStudentsSay';


function BootcampReviews(props) {
    return (
        <Wrapper>
            <div className="bootcamp_review_heading">
                <span>What our
                  </span>
                <h1>  students say</h1>
            </div>
            <div className="bootcamp_review">
                <NewReview data={props.data} />
            </div>
            <div className="bootcamp_review1">
              <WhatStudentsSay data={props.data} />
            </div>
        </Wrapper>
    )
}

export default BootcampReviews
const Wrapper = styled.div`
    width:100%;
    height:auto;
    display:grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    box-sizing: border-box;
    margin-top:100px;
    @media (max-width: 767px) {
      margin-top:60px;
    }

    span {
    font-size: 26px;
    letter-spacing: 0.04em;
    font-weight: 300;
    @media (max-width: 479px){
      font-size: 20px;

    }
  }
  h1 {
    padding-top: 0px !important;
    font-weight: bold;
    color: var(--secondaryColor);
    margin-top: 0px;
    font-size: 48px;
    letter-spacing: 0.04em;
    @media (max-width: 479px){
      font-size: 36px;

    }
  }

  .bootcamp_review_heading{
      
      grid-area: 1/2/2/6;
      @media (max-width: 479px){
        grid-area: 1/2/2/11;

    }
  }
  /* .bootcamp_review{
    display: none;
    grid-area: 2/1/3/12;

  } */
  @media (min-width: 1200px){
    .bootcamp_review{
      display: block;
      grid-area: 2/1/3/12;

    }
    .bootcamp_review1{
      display: none;
    }
  }
  @media (max-width: 1200px){
    .bootcamp_review1{
      display: block;
      grid-area: 2/1/3/12;

    }
    .bootcamp_review{
      display: none;
    }
  }
  `