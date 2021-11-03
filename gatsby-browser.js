import React from "react"
import Layout from "./src/components/layout"
import { UserProvider } from "./src/components/UseToken"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <UserProvider>{element}</UserProvider>
    </>
  )
}
