const searchReducer =(state = {search:[]}, { type, payload }) => {
    switch (type) {
  
    case "SEARCH":
      return { search: payload }
  
    default:
      return {state}
    }
  }
  
  export default searchReducer