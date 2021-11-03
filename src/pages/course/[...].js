import React from "react"
import axios from "axios"
import { UserContext } from "../../components/UseToken"

import styled from "styled-components"
import CourseContent from "../../components/CourseContentAccordion"

function Index(props) {
  const [key, setKey] = React.useState("")
  const [course, setCourse] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const { token } = React.useContext(UserContext)
  const code = props.params["*"]
  const getIndex = props.params && props.params["*"]?.indexOf("/")
  const getLength = props.params["*"]?.length
  const slice = code?.slice(getIndex, getLength)
  setKey(slice)
  const fetchUserInfo = async () => {
    const { data } = await axios.get(
      `${process.env.STRAPI_API_URL}/courses${key}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    data && setLoading(false)
    setCourse(data)
  }
  React.useEffect(() => {
    fetchUserInfo()
  }, [key,  token])
  return (
    <>
      {loading && (
        <Wrapper>
          <h1>Loading ...</h1>
        </Wrapper>
      )}
      {!loading && (
        <Container>
          <CourseContent data={course} />
        </Container>
      )}
    </>
  )
}

export default Index

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 900px;
`
const Container = styled.div`
  width: 100%;
  min-height: 900px;
`
