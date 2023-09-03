import { useCart } from "../Hooks/useCart"
import { useFilter } from "../Hooks/useFilters"
import "./Footer.css"

export function Footer (){
    //const {filters} = useFilter()

   const {cart} = useCart()
   console.log(cart)
    return(
        <footer className="footer">
         {/*JSON.stringify(filters,null,2)*/}
            {JSON.stringify(cart, null , 2)}
            </footer>
    )
}