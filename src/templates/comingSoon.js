import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import NumberCounter from "../components/NumberCounter"

function ComingSoon({ data }) {
  const {
    title,
    coming_soon_slug,
    coming_soon_title,
    description,
    span,
    coming_soon_media,
    success_message,
  } = data.strapiComingSoonPages
  const [email, setEmail] = React.useState("")
  const [result, setResult] = React.useState(null)

  const _handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email, {
      MMERGE7: `${coming_soon_slug}`,
      MMERGE8: "coming soon pages",
    })
    setResult(result.result)
    console.log(result)
  }
  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <Wrapper>
      <Container>
        <div className="right_one">
          <h1>{coming_soon_title}</h1>

          <span>{span}</span>
          <h2>{title}</h2>
        </div>
        <div className="right_two">
          <ReactMarkdown>{description}</ReactMarkdown>
          <div className="coming_soon_email">
            {result === "success" ? (
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "var(--secondaryColor",
                }}
              >
                {success_message}
              </p>
            ) : result === "error" ? (
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "var(--secondaryColor",
                }}
              >
                Email is Inavalid or Already Subscribed
              </p>
            ) : (
              <form onSubmit={_handleSubmit}>
                <div className="input-group input-group-icon">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <div className="input-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="button_submit">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="coming_soon_left">
          <GatsbyImage
            className="image"
            image={coming_soon_media.localFile.childImageSharp.gatsbyImageData}
            alt="coming_soon_image"
          />
        </div>
       
      </Container>
      <div>
      

      </div>
    </Wrapper>
  )
}

export default ComingSoon

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
  @media (max-width: 991px) {
    height: auto;
    margin: 100px 0;
  }
`
const Container = styled.div`
  grid-area: 1/2/2/11;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  height: auto;

  .right_one {
    grid-area: 1/1/2/2;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 991px) {
      grid-area: 1/1/2/3;
    }
    span {
      font-size: 26px;
      letter-spacing: 0.04em;
      font-weight: 300;
      @media (max-width: 767px) {
        font-size: 30px;
      }
    }
    h2 {
      padding-top: 0px !important;
      font-weight: bold;
      color: var(--secondaryColor);
      margin-top: 0px;
      margin-bottom: 0;
      font-size: 48px;
      letter-spacing: 0.04em;
      line-height: 1.2;
      @media (max-width: 767px) {
        font-size: 30px;
      }
    }
    h1 {
      font-weight: 800;
      font-size: 62px;
      color: var(--secondaryColor);
      @media (max-width: 767px) {
        font-size: 34px;
      }
    }
  }
  .right_two {
    grid-area: 2/1/3/2;
    width: 100%;
    @media (max-width: 991px) {
      grid-area: 3/1/4/3;
    }
    h4 {
      font-weight: 600;
      margin: 10px 0;
    }
    p {
      margin: 20px 0;
    }
  }
  .coming_soon_left {
    grid-area: 1/2/3/3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .gatsby-image-wrapper {
      width: 380px;
      height: 240px;
      border-radius: 6px;
      @media (max-width: 991px) {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 991px) {
      grid-area: 2/1/3/3;
      padding: 20px 0;
    }
    img {
      width: 370px;
      height: 240px;
    }
  }
  input,
  input[type="radio"] + label,
  input[type="checkbox"] + label:before,
  select option,
  select {
    width: 100%;
    padding: 1em;
    line-height: 1.4;
    border: 1px solid #e5e5e5;
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
    background: #f8f8f8;
    box-shadow: 0px 4.18433px 4.18433px rgba(0, 0, 0, 0.1);
    border-radius: 50.212px;
  }
  input::placeholder {
    color: #000000 !important;
  }
  input:focus {
    outline: 0;
    border-color: #bd8200;
  }
  input:focus + .input-icon i {
    color: #f0a500;
  }
  input:focus + .input-icon:after {
    border-right-color: #f0a500;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + label,
  select {
    display: inline-block;
    width: 50%;
    text-align: center;
    border-radius: 0;
  }
  input[type="radio"] + label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  input[type="radio"] + label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  input[type="radio"] + label i {
    padding-right: 0.4em;
  }
  input[type="radio"]:checked + label,
  input:checked + label:before,
  select:focus,
  select:active {
    background-color: #f0a500;
    color: #fff;
    border-color: #bd8200;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    position: relative;
    display: block;
    padding-left: 1.6em;
  }
  input[type="checkbox"] + label:before {
    position: absolute;
    top: 0.2em;
    left: 0;
    display: block;
    width: 1em;
    height: 1em;
    padding: 0;
    content: "";
  }
  input[type="checkbox"] + label:after {
    position: absolute;
    top: 0.45em;
    left: 0.2em;
    font-size: 0.8em;
    color: #fff;
    opacity: 0;
    font-family: FontAwesome;
    content: "\f00c";
  }
  input:checked + label:after {
    opacity: 1;
  }
  select {
    height: 3.4em;
    line-height: 2;
  }
  select:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  select:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  select:focus,
  select:active {
    outline: 0;
  }
  select option {
    background-color: var(--thirdColor);
    color: #000000;
  }
  .input-group {
    margin-bottom: 1em;
    zoom: 1;
  }
  .input-group:before,
  .input-group:after {
    content: "";
    display: table;
  }
  .input-group:after {
    clear: both;
  }
  .input-group-icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 479px) {
      flex-direction: column;
    }
  }
  .input-group-icon input {
    padding-left: 4.4em;
  }
  .input-group-icon .input-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 3.4em;
    height: 3.4em;
    line-height: 3.4em;
    text-align: center;
    pointer-events: none;
  }
  .input-group-icon .input-icon:after {
    position: absolute;
    top: 0.6em;
    bottom: 0.6em;
    left: 3.4em;
    display: block;
    border-right: 1px solid #e5e5e5;
    content: "";
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }
  .input-group-icon .input-icon i {
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }
  .btn_submit {
    width: auto;
    padding: 15px 25px;
    color: var(--secondaryColor);
    background-color: var(--thirdColor);
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .btn_submit_div {
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  .container {
    display: flex;
    margin-left: 35px;
    align-items: center;
    font-size: 18px;
    color: #fff;
  }
  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .button_submit {
    position: absolute;
    right: 0;
    @media (max-width: 479px) {
      position: unset;
      margin: 15px 0;
    }
    button {
      background: var(--purpleColor);
      border: none;
      outline: none;
      min-width: 180px;
      padding: 18px;
      border-radius: 50.212px;
      color: #fff;
      cursor: pointer;
    }
  }
`
export const query = graphql`
  query SingleomingSoon($coming_soon_slug: String) {
    strapiComingSoonPages(coming_soon_slug: { eq: $coming_soon_slug }) {
      title
      coming_soon_slug
      coming_soon_title
      description
      span
      success_message
      coming_soon_media {
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: DOMINANT_COLOR
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
