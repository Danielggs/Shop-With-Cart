import { useCart } from "../Hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
//import {products} from "../Mocks/products.json"
import "./Productos.css"


export function Products({products}){
    const {addToCart,removeToCart , cart} = useCart()
    const checkProductInCart = products =>{
        return cart.some(item =>item.id === products.id)

    }

    return(
        <main className="products">
            <ul>
                {
                    products.slice(0, 10).map(products=>{
                        const isProductInCart = checkProductInCart(products)
                    return(
                     
                        <li key={products.id}>
                            <img src={products.thumbnail} alt={products.title}/>
                            <div> <strong> {products.title} - ${products.price}</strong> </div>
                           <div>
                            <button style={{borderColor:isProductInCart? "red" :"white" }} onClick={()=>{
                                isProductInCart
                                ? removeToCart(products)
                                 :addToCart(products)
                                
                                
                                }}>
                               {isProductInCart
                               ? <RemoveFromCartIcon/> 
                               : <AddToCartIcon/>}
                            </button>
                            </div>

                        </li>
                    )})
                }
            </ul>
        </main>
    )
}