import {combineReducers,createStore,applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {thunk} from "redux-thunk"
import drawerReducer from "./reducers/drawer"
import productsReducer from "./reducers/products"
import productsDetail from "./reducers/productDetail"



let initialState = {

}

const reducer = combineReducers({
    drawer:drawerReducer,
    products:productsReducer,
    detail:productsDetail
})

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))
export default store;


