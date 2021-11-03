import React from "react"
import styled from "styled-components"
import axios from "axios"
import { UserContext } from "../components/UseToken"
import { Link } from "gatsby"

function Profile() {
  const [user, setUser] = React.useState("")
  const [userId, setUserId] = React.useState(null)
  const [order, setOrder] = React.useState()
  const { token, cart } = React.useContext(UserContext)
  console.log(order)
  React.useEffect(() => {
    const fetchUserInfo = async () => {
      const { data } = await axios.get(
        `${process.env.STRAPI_API_URL}/users/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(data)
      setUser(data.username)
      setUserId(data._id)
    }
    const fetchOrdersInfo = async () => {
      const { data } = await axios.get(`${process.env.STRAPI_API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(data)
      setOrder(data)
    }
    fetchOrdersInfo()
    fetchUserInfo()
  }, [user, token])

  return (
    <Wrapper>
      {token ? (
        <>
          <div className="profile_wrapper">
            <div className="avatar_profile">
              <h1>{user.charAt(0).toUpperCase()}</h1>
            </div>
            <h2 style={{ textTransform: "capitalize", marginLeft: "1.5rem" }}>
              {user}
            </h2>
          </div>
          <div className="orders_wrapper">
            {order && userId && <h2>orders</h2>}
            {order || cart.length ? (
              order?.map((o) => {
                return (
                  userId === o.user._id && (
                    o.courses.map(c => {
                      return(
                        (
                          <div className="order_main_wrapper">
                            <div className="course_image">
                                <img src={c.course_image.url} alt="" />
                              </div>
                            <div className="course_desc">
                              <h2>{c.title}</h2>
                              <p>{c.short_descrption}</p>
      
                              <Link to={`/course/${c.slug}/${c.id}`}>Learn More</Link>
                            </div>
                          </div>
                        )
                      )
                    })
                  )
                )
              })
            ) : (
              <h2>NO orders for this user</h2>
            )}
          </div>
          <div className="orders_wrapper">
            <h2>pending orders</h2>
            {cart.length ? (
              cart.map((o) => {
                return (
                  <div className="order_main_wrapper">
                    {/* <div className="course_image">
                      <img src={o.course_image.url} alt="" />
                    </div> */}
                    <div className="course_desc">
                      <h2>{o.title}</h2>
                      {/* <p>{o.short_descrption}</p> */}

                      <Link to="/cart">go to cart</Link>
                    </div>
                  </div>
                )
              })
            ) : (
              <h2>no pending orders</h2>
            )}
          </div>
        </>
      ) : (
        <h1>you'll be redirected to home wihin 5sec</h1>
      )}
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;

  .profile_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 80%;
    align-items: center;
  }
  .avatar_profile {
    width: 60px;
    border: 1px solid black;
    border-radius: 50%;
    height: 60px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0 auto;
      text-align: center;
    }
  }
  .orders_wrapper {
    display: flex;
    width: 80%;
    flex-direction: column;
    padding: 20px 0;
    .order_main_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: 20px 0;

      .course_image {
        display: block;
        width: 20%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .course_desc {
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
      }
    }
  }
`
