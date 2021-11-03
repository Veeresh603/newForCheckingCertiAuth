import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

function SomeSection(props) {
  return (
    <Wrapper>
      <div className="somesection">
        <div className="background">
          <img
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src={props.image}
            alt={props.title}
          />
        </div>

        <div className="image">
          <div className="black">
            <div>
              <h1>{props.title}</h1>
            </div>
            <div>
              <p>{props.descrption}</p>
            </div>

            <Link to="">check out our workshop page</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SomeSection

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 150px;
  @media (max-width: 479px) {
    margin-top: 80px;
  }
  .somesection {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    @media (max-width: 479px) {
      grid-template-rows: 400px 250px;
      padding-bottom: 0px;
    }
  }

  .text {
    grid-area: 1/3/2/6;
    display: flex;
    justify-content: center;

    align-items: center;
    height: auto;
    @media (max-width: 479px) {
      grid-area: 2/2/3/11;
    }
  }
  h1,
  p,
  a {
    color: white;
  }

  .background {
    background-color: #c4c4c4;
    grid-area: 1/1/2/12;
    @media (max-width: 479px) {
      grid-area: 2/2/3/11;
    }
  }
  .para {
    width: 100%;
    height: auto;
    display: flex;
    border: 2px solid white;
    padding: 10px;
    z-index: 1;
  }
  .image {
    grid-area: 1/7/3/12;
    margin: 50px 0px;
    background-color: #000000;
    display: flex;
    align-items: center;
    padding: 50px;
    margin-top:198px;
    height:400px;
    @media (max-width: 479px) {
      grid-area: 1/2/2/11;
      padding: 0px;
    }
  }
  .black {
    background-color: #000000;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
  }
  p{
      font-size:25px;
  }
  h1{
      font-size:18px;
      font-weight:800;
  }
  .img {
    @media (max-width: 479px) {
      height: 400px !important;
    }
  }
`
