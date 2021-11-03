import React, { useState } from "react"
import { getCart, saveCart } from "../../utils/cart"
const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState("")
  const [cart, setCart] = useState(getCart())
  const [message, setMessage] = useState()

  const updateCart = (updatedCart) => {
    setCart(updatedCart)
    saveCart(updatedCart)
  }

  const addCart = (product, qty = 0) => {
    try {
      const copy = [...cart]
      const indexOfProduct = copy.findIndex(
        (alreadyInCart) => alreadyInCart.strapiId === product.strapiId
      )

      if (indexOfProduct === -1) {
        product.qty = qty
        copy.push(product)
      } else {
        copy[indexOfProduct].qty += qty

        if (copy[indexOfProduct].qty === 0) {
          copy.splice(indexOfProduct, 1)
        }
      }
      setMessage(indexOfProduct)
      updateCart(copy)
    } catch (err) {
      console.log(err)
    }
  }

  const clearCart = () => {
      const updatedCart = []
      updateCart(updatedCart)
  }

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken))
    setToken(userToken)
  }
  
  React.useEffect(() => {
    const tokenString = sessionStorage.getItem("token")
    const userToken = JSON.parse(tokenString)
    setToken(userToken)
  }, [token])

  return (
    <UserContext.Provider
      value={{ token, setToken: saveToken, cart, setCart, addCart, message, clearCart }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
