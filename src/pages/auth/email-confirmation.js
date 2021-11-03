import React from "react"
import styled from "styled-components"
import { callApi } from "../../../utils/auth"
import { navigate } from "gatsby"
import { Link } from "gatsby"
// import { navigate } from '@reach/router'

const backendUrl = process.env.STRAPI_API_URL
function Redirect(props) {
  console.log(props)
  const [user, setUser] = React.useState("")
  const [pass, setPass] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [errorMsg, setErrorMsg] = React.useState(null)

  React.useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`${backendUrl}/auth/email-confirmation${props.location.search}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`)
        }
        return res
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 302 || 200) {
          navigate("/login")
        }
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        // setText('You have been successfully logged in. You will be redirected in a few seconds...');
        // Redirect to homepage after 3 sec
      })
      .catch((err) => {
        console.log(err)
        // setText('An error occurred, please see the developer console.')
      })
  }, `${props.location.search}`)

  return (
    <Wrapper>
      <h1>Email is Confirmed</h1>
      <p>Continue to Login Page</p>
      <Link to="/login">Login</Link>
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
  background-color: var(--secondaryColor);
  h1 {
    color: #fff;
  }
`
