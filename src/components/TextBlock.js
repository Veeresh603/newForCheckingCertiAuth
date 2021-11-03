import React from "react"
import styled from "styled-components"

const TextBlock = props => {
  return (
    <Wrapper>
      {props.data.map(d => {
        return (
          <div className="section_grid_wrapper">
            <div className="main_section">
              <div className="descrption">
                <h2>{d.Button_descrption}</h2>
              </div>
              <div className="button">
                <a href={d.slug}>{d.Button_label}</a>
              </div>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default TextBlock

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  @media (max-width: 479px) {
    margin-top: 45px;
  }
  .section_grid_wrapper {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    padding-top: 10px;
  }
  .main_section {
    grid-area: auto/2/auto/11;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 479px){
      display:flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  a {
    display:flex;
    width:auto;
    text-decoration: none;
    background-color: var(--secondaryColor);
    color: #fff;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    @media (max-width: 479px) {
      display:flex;
      justify-content: center;
      width: 100%;
      padding: 13px;
      text-align: center;

    }
  }
  h2 {
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  .descrption {
    @media (max-width: 479px) {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }
  .button {
    margin-left: 10px;

    @media (max-width: 479px) {
      font-size: 11px;
      /* width: 100%; */
    }
  }
`
