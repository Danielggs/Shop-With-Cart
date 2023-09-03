
import { Products } from './Components/Productos'
import { Header } from './Components/Header'
import {Footer} from "./Components/Footer"
import { products as initialProduct } from './Mocks/products.json'
import { useFilter } from './Hooks/useFilters'
import { Cart } from './Components/Cart'
import { CartProvider } from './context/cart'




function App() {


 const {filterProducts, filters} =useFilter()
 const filteredProducts = filterProducts(initialProduct)

  return (
  <CartProvider>
    <Header/>
    <Cart/>
    <Products products={filteredProducts}/>
   

  </CartProvider>
  
  )
}

export default App
