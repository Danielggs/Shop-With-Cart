export const cartInitialState = []

export const cartReducer =(state,action) =>{
    const {type: actionType, payload: actionPayLoad} = action

    switch (actionType) {
        case "ADD_TO_CART":{
            console.log("hola")
            const{ id } = actionPayLoad
            const productInCart = state.findIndex(item => item.id === id)

            if(productInCart >= 0){
                const newState = structuredClone(state)

                newState[productInCart].quantity += 1
               return newState
            }
    
            return[
                ...state,
                {
                    ...actionPayLoad,
                    quantity: 1
                }
            ]}
        case "REMOVE_FROM_CART":{
            const {id} = actionPayLoad
            return state.filter(item=> item.id !== id)
            }

        case "CLEAR_CART":{
           
            return cartInitialState
        }
    

    }


    return state
}