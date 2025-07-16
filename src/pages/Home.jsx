import React from 'react'
import ProductCard from '../components/ProductCard'

const dummyProducts = [
  {
    id: '1',
    name: 'Nike Air Max',
    price: 7999,
    image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png',
    category: 'Shoes',
    inStock: true
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    price: 8999,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/6f1f29d777e245acb3b107957440fa87_9366/ULTRABOOST_1.0_SHOES_Black_HQ4199_HM5.jpg',
    category: 'Shoes',
    inStock: true
  },
  {
    id: '3',
    name: 'Puma Running Shoes',
    price: 4999,
    image: 'https://m.media-amazon.com/images/I/61I3j9Zhf+L._UY1000_.jpg',
    category: 'Shoes',
    inStock: false
  }
]

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Ecommerce App</h1>
        <nav>
          <ul className="flex gap-4 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Products</li>
            <li className="hover:text-blue-500 cursor-pointer">Cart</li>
          </ul>
        </nav>
      </header>

      <main className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
