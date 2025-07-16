import './App.css'
import Home from './pages/Home'
import { CartProvider } from './context/CartProvider' 

function App() {
  return (
    <CartProvider>
      <div>
        <Home />
      </div>
    </CartProvider>
  )
}

export default App
