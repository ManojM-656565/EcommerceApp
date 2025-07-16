import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-[170px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-600 mt-1 text-sm">₹{product.price}</p>

        {product.inStock ? (
          <button
            onClick={() => addToCart(product)
            }
            className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition text-sm"
          >
            Add to Cart
          </button>
        ) : (
          <span className="mt-auto text-red-500 text-sm font-medium">Out of Stock</span>
        )}
      </div>
    </div>
  )
}

export default ProductCard
