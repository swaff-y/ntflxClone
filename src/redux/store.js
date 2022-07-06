import starsReducer from "./starsReducer";
import moviesReducer from "./moviesReducer";
import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import watchReducer from "./watchReducer";
import seriesReducer from "./seriesReducer";
import newReducer from "./newReducer";
import popularReducer from "./popularReducer";

const allReducers = combineReducers({
    stars: starsReducer,
    movies: moviesReducer,
    display: displayReducer,
    series: seriesReducer,
    watch: watchReducer,
    newVids: newReducer,
    popular: popularReducer,
})

export default allReducers;