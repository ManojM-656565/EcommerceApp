import React, { useState } from 'react'
import { CartContext } from './cartContext'
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const addToCart = (product) => {
    console.log(cartItems)
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id)
      if (exists) return prevItems 
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        selectedCategory,
        setSelectedCategory,
        showInStockOnly,
        setShowInStockOnly,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}