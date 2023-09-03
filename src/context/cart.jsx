import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducer/cart";

export const CartContext = createContext()

export function CartProvider ({children}) {
   const [state, dispatch] = useReducer(cartReducer, cartInitialState)
    
  const addToCart = product => dispatch({  
    type: "ADD_TO_CART",
    payload: product
  }) 

  const removeToCart = product => dispatch({
    type: "REMOVE_FROM_CART",
    payload:product
  })
  
  const clearCart = () => dispatch({type: "CLEAR_CART" })


    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeToCart
        }}
        > 
           {children}
        </CartContext.Provider>
    )
}