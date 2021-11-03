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

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()
  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}
