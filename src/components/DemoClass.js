import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown"
import FormControl from "@material-ui/core/FormControl"
import NativeSelect from "@material-ui/core/NativeSelect"
import { GoCalendar } from "@react-icons/all-files/go/GoCalendar"

import scrollTo from "gatsby-plugin-smoothscroll"

function DemoClass(props) {
  const [state, setState] = React.useState({
    webinar: `${props.day}`,
  })

  const handleChange = event => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }
  // console.log(props.bonus.map(l => l.bonus_topics));
  return (
    <Wrapper>
      
      <div className="main_heading">
        <h1>{props.title}</h1>
      </div>
      <div className="left_section">
        <div className="left_grid">
          <div className="select">
            <div className="icon_row">
              <div>
                <GoCalendar className="icon" />
              </div>
              <SelectDay>
                <NativeSelection
                  value={state.webinar}
                  name="webinar"
                  onChange={handleChange}
                  inputProps={{ "aria-label": "webinar" }}
                >
                  {props.data.map(d => (
                    <option value={`${d.day}`}>{d.day}</option>
                  ))}
                </NativeSelection>
              </SelectDay>
            </div>
          </div>
          {props.data.map((l, id) =>
            l.day === state.webinar ? (
              <>
                {/* <div className="demo_days_title">
                 
                </div> */}

                {l.free_demo_class.map((f, id) => (
                  <div key={f.id} className="section">
                    <h2>{f.title}</h2>

                    <div className="section_row">
                      <div>
                    <img className="img" src={f.icon.url} alt="" />
                      </div>
                      <div className="descrption_padding">
                        <ReactMarkdown>{f.descrption}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : null
          )}
        </div>

        <div className="registration">
        <button className="link" onClick={() => scrollTo("#register")}>
            Register
          </button>
        </div>
      </div>
      <div className="right_section">
        <GatsbyImage style={{maxWidth: "100%"}} image={props.img} />
      </div>
    </Wrapper>
  );
}

export default DemoClass

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  place-items: center;
  .main_heading {
    grid-area: 2/1/3/12;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .descrption_padding {
    padding-left: 20px;
  }
  .left_section {
    grid-area: 3/2/4/11;
    background-color: #ffffff;
    height: auto;
    /* margin-top: 50px; */
    box-sizing: border-box;
  }
  .left_grid {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(12, 1fr);
  }
  .right_section {
    grid-area: 1/1/2/13;
    height: auto;
    /* margin-top: 100px; */
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
   
    .gatsby-image-wrapper {
      width: 600px;
      border-radius: 6px;
    }
  }
  .im-checkout-layout, .layout-vertical{
    width: auto !important;
  }
  .im-checkout-btn.btn--default{
    padding: 20px !important;
  }
  .select {
    display: flex;
    align-items: center;
    grid-area: auto/1/auto/13;
    height: auto;
    width: 100%;
    padding: 25px 0;
    border-bottom: 1px solid var(--thirdColor);
  }
  .demo_days_title {
    grid-area: auto/1/auto/13;

    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid var(--thirdColor);
  }
  .icon_row {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    justify-content: center;
    /* margin-left: 40px; */
  }
  .icon {
    width: 35px;
    height: 35px;
    color: var(--secondaryColor);
    margin-right: 15px;
  }
  .section {
    grid-area: auto/1/auto/13;

    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width:auto;
    place-content: center;
    place-items:center;
  }
  .section_row {
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
  }
  p {
    font-size: 18px;
    text-align: justify;
  }
  h5 {
    margin-top: -20px;
    font-size: 13px;
    font-weight: 400;
    text-align: justify;
  }
  h6 {
    border: 1px solid var(--primaryColor);
    width: 135px;
    padding: 10px;
    text-align: justify;

    font-size: 16px;
  }
  .bonustopics,
  button {
    grid-area: auto/3/auto/10;
    /* margin-left: 28px; */
    padding: 0 20px;
    margin-top: -40px;
  }
  /* .list {
    padding: 0 139px;
  } */
  h2 {
    color: var(--primaryColor);
    font-size: 20px;
    font-weight: 600;
  }
  .link {
    padding: 15px 20px;
    color: var(--secondaryColor);
    transform: translate3d(0px, -1px, 0px);
    background-color: var(--thirdColor);
    border: 1px solid transparent;
    font-family: var(--family);
    font-size: 20px;
    border-radius: 6px;
    transition: transform 0.25s ease, box-shadow 0.25s ease,
      background-color 0.25s ease;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    text-decoration: none;
    text-align: center;
  }
  .link:hover {
    color: var(--secondaryColor);
    transform: translate3d(0px, -1px, 0px);

    background-color: var(--primaryColor);
    box-shadow: none;
  }
  .registration {
    grid-area: auto/3/auto/9;

    margin-top: 80px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    width: auto;
  }
  .img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 767px) {
    .main_heading {
      grid-area: 2/2/3/11;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .section_row {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .descrption_padding {
      padding-left: 0px;
    }
    .right_section {
      margin-top:0px;
      grid-area: 1/2/2/11;
    }
    .left_section {
      grid-area: 3/2/4/11;
    }
    .section {
      grid-area: auto/2/auto/12;
      margin-left: 0px;
      padding: 0px;
    }

    .bonustopics {
      margin-left: 0px;
      grid-area: auto/2/auto/11;
    }
    .right_section {
      margin-top: 0px;
    }
    ul {
      padding-left: 0px;
      text-align: center;
    }
  }
  @media (max-width: 479px) {
    .main_heading {
      grid-area: 2/2/3/11;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .right_section {
      margin-top: 0px !important;
      grid-area: 1/2/2/11;
    }
    .left_section {
      grid-area: 3/2/4/11;
    }
    .section {
      padding: 0 20px;
      grid-area: auto/2/auto/12;
      margin-left: 0px;
      padding: 0px;
    }
    .bonustopics {
      margin-left: 0px;
      grid-area: auto/2/auto/11;
    }

    .right_section {
      margin-top: 50px;
    }

    .registration {
      grid-area: auto/2/auto/11;
    }
    ul {
      padding-left: 0px;
      text-align: left;
    }
  }
  .MuiInputBase-input {
    font-family: var(--family);
    font-size: 18px;
  }
  h4{
    font-weight: 600;
  }
`
const SelectDay = styled(FormControl)``
const NativeSelection = styled(NativeSelect)``
