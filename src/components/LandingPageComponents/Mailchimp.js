import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {CgProfile} from "@react-icons/all-files/cg/CgProfile"
import {AiOutlinePhone}from "@react-icons/all-files/ai/AiOutlinePhone"
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail"

import styled from "styled-components"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      phone: "",
      name: "",
      result: null,
      isCourseChecked: false,
    }
  }

  _handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email, {
      FNAME: this.state.name,
      PHONE: this.state.phone,
      MMERGE7: this.props.slug,
      MMERGE8: "demo class register",
    })
    this.setState({ result: result.result })
    console.log(result)
  }
  handleChange = (event) => {
    this.setState({ email: event.target.value })
  }
  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  }
  handleChangePhone = (e) => {
    this.setState({ phone: e.target.value })
  }
  handleInputChange = (e) => {
    this.setState({ course: e.target.value })
  }
  render() {
    console.log(this.props.brochure)

    return (
      <Wrapper>
        <div className="brouchre_image">
          <img
            className="network"
            src={this.props.brochure}
            alt="network brouchre"
          />
        </div>
        <div className="brouchre_form">
          <h2>
            {this.props.data.popup_modal_title} {this.props.span}{" "}
            {this.props.title}
          </h2>
          <h4>{this.props.data.popup_modal_short_description}</h4>

          {this.state.result === "success" ? (
            <div className="download_button">
              <p style={{ color: "#fff" }}>
                {this.props.data.after_submitting_message}
              </p>
            </div>
          ) : this.state.result === "error" ? (
            <h1>Error check the email you've typed.</h1>
          ) : (
            <form onSubmit={this._handleSubmit}>
              <div className="row">
                <div className="input-group input-group-icon">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    onChange={this.handleChangeName}
                  />
                  <div className="input-icon">
                    <CgProfile/>
                  </div>
                </div>

                <div className="input-group input-group-icon">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={this.handleChange}
                  />
                  <div className="input-icon">
                    <AiOutlineMail />
                  </div>
                </div>
                <div className="input-group input-group-icon">
                  <input
                    type="phone"
                    placeholder="Phone"
                    required
                    required
                    onChange={this.handleChangePhone}
                  />
                  <div className="input-icon">
                    <AiOutlinePhone />
                  </div>
                </div>
              </div>
              <div className="btn_submit_div">
                <button type="submit" className="btn_submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 50%;
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  padding: 50px 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 479px) {
    padding: 30px 0;
    grid-template-columns: 1fr 1fr;
  }

  h2,
  h4 {
    color: #fff !important;
  }
  a {
    min-width: 200px;
    background-color: var(--thirdColor);
    border-radius: 66.8944px;
    padding: 15px 30px;
    cursor: pointer;
    color: var(--secondaryColor);
    text-decoration: none;
  }
  h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0px;
  }
  h4 {
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  h1 {
    color: #fff !important;
    text-align: center;
  }
  .brouchre_image {
    grid-area: 1/1/2/2;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .network {
    width: 370px;
    height: 240px;
  }
  .download_button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 20px;
  }

  .brouchre_form {
    grid-area: 1/2/2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
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
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
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
  form {
    width: 80%;

    @media (max-width: 479px) {
      width: 100%;
    }
  }
`
