const initialState = {
product:{}
}

const productDetail =(state = initialState, { type, payload }) => {
    switch (type) {
  
    case "GET_DETAIL":
      return { 
        ...state,
        product: payload }
  
    default:
      return {state}
    }
  }
  export default productDetail

