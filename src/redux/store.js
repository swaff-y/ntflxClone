import starsReducer from "./starsReducer";
import moviesReducer from "./moviesReducer";
import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import watchReducer from "./watchReducer";

const allReducers = combineReducers({
    stars: starsReducer,
    movies: moviesReducer,
    display: displayReducer,
    watch: watchReducer
})

export default allReducers;