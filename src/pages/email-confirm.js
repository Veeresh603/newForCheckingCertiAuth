import React from "react"
import styled from "styled-components"
import { UserContext } from "../components/UseToken"

function Index() {
  const { token } = React.useContext(UserContext)

  return (
    <Wrapper>
      {token ? (
        <h1 style={{ color: "white" }}>
          you've confirmed the email so you can login
        </h1>
      ) : (
        <h1 style={{ color: "white" }}>
          You may have recieved the Email please check it and confirm to Login
        </h1>
      )}
    </Wrapper>
  )
}

export default Index

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: var(--secondaryColor);
`
