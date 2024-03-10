
const initialState = {
    cart:[]
    }
    
    const cartReducer =(state = initialState, { type, payload }) => {
        switch (type) {
      
        case "ADD_CART":
          const item = payload;
          const existItem = state.cart.find( (x)=>x.id === item)
          if(existItem){
            return {
              ...state,
              cart: state.cart.map((x)=> x.id === existItem.id ? item : x ) 
            }
          }else{
            return {
              ...state,
              cart: [...state.cart, item]
            }
          }


        case "REMOVE_CART":
          return {
            cart: state.cart.filter((item)=> item.id!==payload) };
      
        default:
          return {state}
        }
      }
      export default cartReducer