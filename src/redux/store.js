import starsReducer from "./starsReducer";
import { combineReducers } from "redux";
import displayReducer from "./displayReducer";

const allReducers = combineReducers({
    stars: starsReducer,
    display: displayReducer
})

export default allReducers;