import React from "react"
import styled from "styled-components"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { callApi } from "../../utils/auth"
import { navigate } from "gatsby"

function ForgotPassword() {
  const [email, setEmail] = React.useState("")
  const [errorMsg, setErrorMsg] = React.useState("")
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await callApi("/auth/forgot-password", "POST", {
        email: email,
      })
      if (response.ok) {
        navigate("/email-confirm")
      } else {
        setErrorMsg(response.message[0].messages[0].message)
      }
    } catch (err) {
      setErrorMsg(err)
    }
  }
  return (
    <Wrapper>
      <div className="main_wrapper">
        <h5>
          Enter your email address below and we'll send you a link to reset your
          password.
        </h5>
        <h6>{errorMsg}</h6>
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="search_icon">
            <AiOutlineMail />
          </div>
        </div>
        <div className="button_wrapper">
          <button onClick={handleSubmit}>Reset Password</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default ForgotPassword

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h5 {
    margin: 2rem 0;
    font-weight: 500;
    font-size: 1.2rem;
    color: #000;
    text-align: center;
  }
  h6 {
    margin: 1rem 0;
    font-weight: 500;
    font-size: 1rem;
    color: red;
    text-align: center;
  }
  .main_wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    @media (max-width: 767px) {
      width: 80%;
    }
  }
  .button_wrapper {
    margin-top: 2rem;
  }
  .search__container {
    display: flex;
    flex-direction: row;
    background: #f8f8f8;
    box-shadow: 0px 2.70041px 2.70041px rgba(0, 0, 0, 0.1);
    border-radius: 69.3284px;
    width: 60%;
    @media (max-width: 767px) {
      width: 80%;
    }

    .search__input {
      width: 100%;
      padding: 20px 24px;
      border: none;
      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;
      outline: none;
      color: var(--secondaryColor);

      backface-visibility: hidden;
    }
    .search_icon {
      display: flex;
      width: 70px;
      background-color: var(--purpleColor);
      justify-content: center;
      align-items: center;
      border-radius: 69.3284px;

      svg {
        color: #fff;
        font-size: 30px;
      }
    }
    .search__input::placeholder {
      color: rgba(87, 87, 86, 0.8) !important;
      text-transform: lowercase;
      letter-spacing: 1.5px;
    }
  }
`
