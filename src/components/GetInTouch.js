import React from "react"
import styled from "styled-components"
import Forms from "../components/GetinTouchForms"
import "./getintouch.css"

function GetInTouch(props) {
  return (
    <Wrapper>
      <div id={props.id} className="getintouch">
        <div className="left_section">
          <h2>Get in touch</h2>
          <h4>
          Please contact us for any queries. Our executives will get back to you with all the answers
          </h4>
        </div>
        <div className="right_section">
            <Forms action={props.action} url={props.url} value={props.value} />
         
        </div>
      </div>
    </Wrapper>
  )
}

export default GetInTouch

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: auto;
  background-color: #f8f8f8;
  .getintouch {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: 500px;
    grid-column-gap: 5px;
    padding: 35px 0px;
    @media (max-width:767px){
      grid-template-rows: 500px 500px;
      padding: 0px 0px;
    }
  }
  .left_section {
    grid-area: 1/2/2/5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width:767px){
      grid-area: 1/2/2/11;
    }
    h2 {
      font-size: 25px;
      font-weight: 600;
    }
    h4 {
      font-weight: 400;
      font-family: "Montserrat", sans-serif !important;
    }
  }
  .right_section {
    grid-area: 1/6/2/12;
    display: flex;
    place-items: center;
    background-color: var(--secondaryColor);
    margin-left: 0;
    flex-direction:row;
    justify-content: center;
    @media (max-width:767px){
      grid-area: 2/1/3/12;
    }
  }
 

  p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #5a5a5a;
  }
  button {
    float: right;
    padding: 0px;
    padding: 12px 30px;
    margin: 8px 0 0;
    border: none;
    font-family: "Montserrat", sans-serif;
    background: var(--thirdColor);
    color: var(--secondaryColor);
    cursor: pointer;
    transition: all 0.3s;
    width: auto;
    font-size: 20px;
    border-radius: 6px;
   
    transition: all 0.1s ease-in-out;
  }
  button:hover {
    background-color: var(--purpleColor);
    
    color : #f1f1f1;  }
`
