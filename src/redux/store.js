import {combineReducers,createStore,applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {thunk} from "redux-thunk"
import drawerReducer from "./reducers/drawer"
import productsReducer from "./reducers/products"
import productDetail from "./reducers/productDetail"
import cartReducer from "./reducers/basket"
import searchReducer from "./reducers/search"


const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

let initialState = {
    cart:{cartItems},
}

const reducer = combineReducers({
    drawer:drawerReducer,
    products:productsReducer,
    product:productDetail,
    cart:cartReducer,
    search:searchReducer
})

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))
export default store;


