const initialState = {
    products: []
}

const productsReducer =(state = initialState, { type, payload }) => {
  switch (type) {

  case "GET_PRODUCTS":
    return { products: payload }

  default:
    return state
  }
}

export default productsReducer