import React from "react"
import styled from "styled-components"

function JoinOurCommunity(props) {
  return (
    <Wrapper>
      <div className="heading">
        <h2>Join Our Community</h2>
      </div>
      <div className="community_links_wrapper" style={{ marginTop: "25px" }}>
        <div className="community_links_section">
          <div className="whatsapp">
            <a className="whatsapp_link" href={props.whatsappLink}>
              Discord
            </a>
          </div>
          <div className="facebook">
            <a className="facebook_link" href={props.facebookLink}>
              Facebook
            </a>
          </div>
          <div className="telegram">
            <a className="telegram_link" href={props.telegramLink}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default JoinOurCommunity

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-top: 80px;

  .heading {
    grid-area: 1/2/2/11;
    display: flex;
    justify-content: center;
  }
  .community_links_wrapper {
    grid-area: 2/2/3/11;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1385px) {
      grid-area: 2/1/3/12;
    }
  }
  .community_links_section {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
      justify-content: center;
    }
    @media (max-width: 1385px) {
      width: 100%;
      justify-content: space-evenly;
    }
  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .whatsapp {
    width: 300px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .facebook {
    width: 300px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .telegram {
    width: 300px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  a {
    text-decoration: none;
    border-radius: 6px;
  }
  .whatsapp_link {
    display: flex;
    width: auto;
    padding: 20px;
    background-color: #7289da;
    color: #fff;
    justify-content: center;
  }
  .facebook_link {
    display: flex;
    width: auto;
    padding: 20px;
    background-color: #1553cb;
    color: #fff;
    justify-content: center;
  }
  .telegram_link {
    display: flex;
    width: auto;
    padding: 20px;
    background-color: #2867b2;
    color: #fff;
    justify-content: center;
  }
  h2 {
    font-weight: 600;
    font-size: 22px;
  }
`
