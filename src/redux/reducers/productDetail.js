const initialState = {
product:{}
}

const productDetail =(state = initialState, { type, payload }) => {
    switch (type) {
  
    case "GET_DETAILS":
      return { 
        ...state,
        product: payload }
  
    default:
      return state
    }
  }
  

