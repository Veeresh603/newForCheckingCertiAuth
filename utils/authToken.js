// import React from "react"
// import { UserContext } from "../src/components/UseToken"

// const API_URL = process.env.STRAPI_API_URL

// export const CallAuthApi = async (path, method, body) => {
//   const { token } = React.useContext(UserContext)

//   const response = await fetch(`${API_URL}${path}`, {
//     method,
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(body),
//   })

//   const data = await response.json()

//   return data
// }
