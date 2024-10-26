import { combineReducers, createStore } from "redux";
import { BlogReducers } from "./Reducers/BlogReducers";

const RootReducer = combineReducers({
    blogRoot: BlogReducers
})

const store = createStore(RootReducer)
export default store;