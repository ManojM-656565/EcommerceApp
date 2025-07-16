import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-[180px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-3">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
