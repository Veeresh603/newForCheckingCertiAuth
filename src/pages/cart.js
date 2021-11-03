import React, { useState, useContext, useCallback } from "react"
import { cartTotal, cartSubTotal } from "../../utils/cart"
import { UserContext } from "../components/UseToken"
import CheckOutForm from "../components/Checkout/CheckOutForm"
import styled from "styled-components"

function Cart() {
  const [, updateState] = useState()
  const [showCheckout, setShowCheckout] = useState(false)
  const forceUpdate = useCallback(() => {
    updateState({})
  }, [])

  const { cart, addCart, token } = useContext(UserContext)
  console.log(cart)
  return (
    <Wrapper>
      <h1>cart page demo</h1>
      {cart.length
        ? cart.map((d) => {
            return (
              <div className="course_wrapper_wrapper">
                <div className="course_wrapper">
                  <div className="title">
                    <h2>{d.title}</h2>
                  </div>
                  <div className="description">
                    <h4>{d.price} /-</h4>
                  </div>
                </div>
                <button
                  onClick={() => {
                    addCart(d, -1)
                    forceUpdate()
                  }}
                >
                  remove from cart
                </button>
              </div>
            )
          })
        : null}
      {cart.length ? <h3>cart total : {cartTotal(cart)}</h3> : null}
      {/* {cart.length ? <p>taxRate : 10%</p> : null}
      {cart.length ? <h3>SubTotal : {cartSubTotal(cart)}</h3> : null} */}
      {!cart.length && <h1>Nothing in the cart to show</h1>}
      {cart.length && !showCheckout ? (
        <button onClick={() => setShowCheckout(true)}>Initiate Checkout</button>
      ) : null}
      {showCheckout && <CheckOutForm cart={cart} />}
    </Wrapper>
  )
}

export default Cart
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
  button {
    outline: none;
    padding: 15px 25px;
    min-width: 150px;
    background-color: var(--secondaryColor);
    border: 1px solid var(--secondaryColor);
    color: #fff;
    cursor: pointer;
  }
`
