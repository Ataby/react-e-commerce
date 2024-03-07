const initialState = {
product:{}
}

const productsDetail =(state = initialState, { type, payload }) => {
    switch (type) {
  
    case "GET_DETAILS":
      return { 
        ...state,
        product: payload }
  
    default:
      return state
    }
  }
  
  export default productsDetail
