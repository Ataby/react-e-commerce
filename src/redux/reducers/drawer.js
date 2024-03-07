const initialState = {
    drawer: false
}

const drawerReducer = (state = initialState, { type, payload }) => {
//export default (state = {drawer:false}, action) => {
  switch (type) {

  case "DRAWER":
    return {drawer: payload}

  default:
    return {state}
  }
}
export default drawerReducer;