export const taxRate = 0.1

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
      return cart
    }
  } catch (err) {}
  return []
}

export const cartTotal = (cart) => {
  try {
    const subTotal = cart.reduce(
      (counter, product) => counter + product.price * product.qty,
      0
    )
    // let currency
    // if (navigator.language === "en-US") {
    //   currency = "USD"
    // } else {
    //   currency = "INR"
    // }
    // console.log(
    //   new Intl.NumberFormat(`${navigator.language}`, {
    //     style: "currency",
    //     currency: 'USD',
    //   }).format(subTotal)
    // )

    return subTotal.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    })
  } catch (err) {
    console.log(err)
  }
}

export const cartSubTotal = (cart) => {
  try {
    const subTotal = cartTotal(cart)
    const tot = subTotal.replace(",", "")
    console.log(tot)
    const total = tot + tot * taxRate
    console.log(total)
    const inrTotal = total.toLocaleString(`${navigator.language}`)
    return inrTotal
  } catch (err) {
    console.log(err)
  }
}

export const removeCart = (strapiId) => {
  const cart = getCart()
  const indexOfProduct = cart.findIndex((C) => C.strapiId === strapiId)
  console.log(indexOfProduct)
  cart.splice(indexOfProduct, 1)
}
// export const cartTotal = (cart) => {
//   const subTotal = subTotal(cart)
//   const total = subTotal + subTotal * taxRate
//   return Math.round(total)
// }
