import React, { useContext } from "react"
import { UserContext } from "../components/UseToken"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

function Courses({ data }) {
  const { addCart, cart } = useContext(UserContext)
  console.log(addCart);
  const [show, setShow] = React.useState(0)

  return (
    <Wrapper>
      <h1>Courses Demo</h1>
      {data.allStrapiCourseDemoLists.nodes.map((d, id) => {
        return (
          <div className="course_wrapper_wrapper">
            <div className="course_wrapper">
              <div className="title">
                <h2>{d.title}</h2>
              </div>
              <div className="description">
                <p>{d.description}</p>
                <h4>{d.price} /-</h4>
                <div className="message">
                  {cart.findIndex((c) => c.title === d.title) === -1 ? (
                    <button onClick={() => addCart(d, 1)}>
                      add to cart
                    </button>
                  ) : (
                    <Link to="/cart">Go to Cart</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Courses

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 900px;
  margin-top: 150px;
  .course_wrapper_wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .course_wrapper {
    display: flex;
    flex-direction: column;
    background: lightgray;
    margin: 2rem 0;
  }
  button,
  a {
    outline: none;
    padding: 15px 25px;
    min-width: 150px;
    background-color: var(--secondaryColor);
    border: 1px solid var(--secondaryColor);
    color: #fff;
    cursor: pointer;
  }
`
export const query = graphql`
  {
    allStrapiCourseDemoLists {
      nodes {
        title
        strapiId
        course
        description
        price
      }
    }
  }
`
