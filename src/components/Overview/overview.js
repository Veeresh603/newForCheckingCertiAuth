import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"

function Overview(props) {
  const { overview, button } = props
  
  const [readMore, setReadMore] = React.useState(overview.length / 4)
  const [seeMore, setSeeMore] = React.useState(true)
  let overview1 = overview.slice(0, readMore)
  let overview2 = overview.slice(overview1.length, overview.length)
  const handleClick = () => setSeeMore(!seeMore)
  return (
    <Wrapper>
      <div className="section">
        <div className="title">
          <h2>overview</h2>
        </div>
        {props.ReadMoreProps ? (
          <div className="descrption">
            <ReactMarkdown>{overview1}</ReactMarkdown>
            {!seeMore && <ReactMarkdown>{overview2}</ReactMarkdown>}
            <button className="seemore_button" onClick={handleClick}>{!seeMore ? `see less` : `see more`}</button>
          </div>
        ) : (
          <div className="descrption">
            <ReactMarkdown>{overview}</ReactMarkdown>
          </div>
        )}

        <div>
          {!props.link ? null : (
            <Link
              className="link"
              to={`https://certisured.com${button.slug_link}`}
            >
              {button.button_label}
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Overview

const Wrapper = styled.div`
  /* margin-top: -90px; */
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  /* padding: 30px 100px; */
  @media (max-width: 479px) {
    padding: 0px;
  }
  a {
    background-color: var(--thirdColor);
    width: auto;
    padding: 15px;
    text-decoration: none;
    color: var(--secondaryColor);
    margin-top: 50px;
  }
  .link {
    width: auto;
  }
  .descrption {
    padding-bottom: 40px;
  }
  .seemore_button{
    padding: 15px 30px;
    background-color: var(--thirdColor);
    color: var(--secondaryColor);
    width: auto;
    text-align: center;
    display: flex;
    border-radius: 6px;
    border: none;
    box-shadow: none;
    outline:none;
    cursor: pointer;

  }
  .section {
    grid-area: 1/2/2/11;
    border: 1px solid groove;
    width: 100%;
    height: auto;
    display: flex;
    align-self: center;
    flex-flow: column wrap;
    @media (max-width: 479px) {
      width: 100%;
    }

    h2 {
      color: var(--primaryColor);
      font-size: 27px;
      font-weight: 600;
    }
  }
  ul{
      padding:0;
  }
  li{
    padding: 6px 0;
  }
`
