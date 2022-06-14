import starsReducer from "./starsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    stars: starsReducer
})

export default allReducers;