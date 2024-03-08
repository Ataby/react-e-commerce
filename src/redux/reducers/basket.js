const initialState = {
    cartItems:[]
    }
    
    const basketReducer =(state = initialState, { type, payload }) => {
        switch (type) {
      
        case "ADD_CART":
          return { 
            ...state,
            product: payload }
      
        default:
          return state
        }
      }
      