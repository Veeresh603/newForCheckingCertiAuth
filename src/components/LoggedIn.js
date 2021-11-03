import React from 'react'
import styled from "styled-components"
import { callApi } from '../../utils/auth'

function LoggedIn() {

  return (
    <Wrapper>
        <h1 style={{color : "white"}}>Your'e already logged in..</h1>
    </Wrapper>
  )
}

export default LoggedIn

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondaryColor);
`