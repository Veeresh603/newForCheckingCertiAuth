import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Link } from "gatsby"
// import { navigate } from '@reach/router'
import { callApi } from "../../utils/auth"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { UserContext } from "../components/UseToken"

const backendUrl = process.env.STRAPI_API_URL
function Redirect(props) {
  const codeLength = props.location.search.length
  const code = props.location.search.slice(6, codeLength)
  const [passConfirm, setPassConfirm] = React.useState("")
  const [pass, setPass] = React.useState("")
  const [errorMsg, setErrorMsg] = React.useState(null)
  const { token, setToken } = React.useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMsg(null)
    try {
      const response = await callApi(`/auth/reset-password`, "POST", {
        code: code,
        password: pass,
        passwordConfirmation: passConfirm,
      })
      console.log(response)
      if (response.user) {
        setToken(response.jwt)

        navigate("/profile")
      } else {
        console.log(response.data[0].messages[0].message)
        // throw "Can't login, Please try again"
        setErrorMsg(response.data[0].messages[0].message)
      }
    } catch (err) {
      setErrorMsg(err)
    }
  }

  return (
    <Wrapper>
      {token ? (
        <h1>Go back to profile</h1>
      ) : (
        <div className="main_wrapper">
          {errorMsg}
          <div className="search__container">
            <input
              className="search__input"
              type="text"
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
            />
            <div className="search_icon">
              <AiOutlineMail />
            </div>
          </div>
          <div className="search__container" style={{ margin: "2rem 0" }}>
            <input
              className="search__input"
              type="text"
              placeholder="confirm password"
              onChange={(e) => setPassConfirm(e.target.value)}
            />
            <div className="search_icon">
              <AiOutlineMail />
            </div>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </Wrapper>
  )
}

export default Redirect
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
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
