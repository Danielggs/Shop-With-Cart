import "./Filters.css"
import { products } from "../Mocks/products.json"
import { useState, useId } from 'react'
import { useFilter } from "../Hooks/useFilters"

export function Filters(){
    const {filters,setFilters} = useFilter()
    const [list] = useState(products)
   
    const selectPriceId = useId()
    const categoryFilterId = useId()
  
const categorias =[]

list.map(items=>{
    categorias.push(items.category)
})
const Simrep= [...new Set(categorias)]

const handleSelectPrice = (event) =>{

    setFilters(prevState=>({
        ...prevState,
        minPrice:event.target.value
    }))
}

const handleChangeCategory =(event)=>{
    setFilters(prevState=>({
        ...prevState,
        category:event.target.value
    }))

}
//setCategorys([...new Set(categorias)])}


   return(
    <section className="Filters">
    <div>
        <label htmlFor={selectPriceId}> Price</label>
        <input type="range" id={selectPriceId} min="0" max="2000" onChange={handleSelectPrice} value={filters.minPrice}/>
        <span>${filters.minPrice}</span>
    </div>
    
    <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
        <option key="6" value="all">All</option>
            {
            Simrep ? Simrep.map((element , i ) => { return(
            <option key={i} value={element}>{element}</option>
            ) }):<></>
            }
       </select>
    </div>

    </section>
   )
}