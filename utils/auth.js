import React from "react"
import { UserContext } from "../src/components/UseToken"

const API_URL = process.env.STRAPI_API_URL

export const callApi = async (path, method, body) => {
  const response = await fetch(`${API_URL}${path}`, {
    method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  return data
}

