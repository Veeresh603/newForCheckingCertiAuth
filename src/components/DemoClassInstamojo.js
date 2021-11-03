import React from "react"
import styled from "styled-components"

function DemoClassInstamojo(props) {
  console.log(props.paypalDesc)
  return (
    <Wrapper>
      <div className="bottom_wrapper">
        <div className="bottom_section">
          <div className="col1" id="register">
            <p
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {!props.instamojoDesc
                ? "Payment Gateway for indian students"
                : props.instamojoDesc}
            </p>
            <div style={{display: "flex", justifyContent: "center"}}>
              {props.instamojoLink && (
                <a href={props.instamojoLink}>{props.instamojoLabel}</a>
              )}
            </div>
          </div>
          <div className="col2">
            <p
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {!props.paypalDesc
                ? "Payment Gateway for international students"
                : props.paypalDesc}
            </p>
            <div className="im-checkout-layout">
              <div className="layout-vertical">
                <div className="im-checkout btn-75">
                  <a href="https://paypal.me/certisured">Paypal</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default DemoClassInstamojo

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  .bottom_wrapper {
    margin-top: 100px;
    width: 100%;
    background-color: #f8f8f8;
    height: auto;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    padding-top: 50px;
  }
  a {
    text-decoration: none;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    min-width: 100px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    letter-spacing: 1px;
  }
  .bottom_section {
    grid-area: 1/2/2/11;
    display: flex;
    height: auto;
    width: 100%;
    background-color: var(--secondaryColor);
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    @media (max-width: 767px) {
      flex-direction: column;
      padding: 50px;
    }
  }

  .im-checkout-layout,
  .layout-vertical {
    width: auto !important;
    display: flex;
    justify-content: center;
  }
  .im-checkout-btn.btn--default {
    padding: 10px !important;
  }
  .col1 {
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (max-width: 767px) {
      width: auto;
    }
  }
  .col2 {
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      width: auto;
    }
  }
`
