import starsReducer from "./starsReducer";
import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import watchReducer from "./watchReducer";

const allReducers = combineReducers({
    stars: starsReducer,
    display: displayReducer,
    watch: watchReducer
})

export default allReducers;