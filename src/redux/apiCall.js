import { request, bio } from "../requestMethods";
import { 
    starsFailure,
    starsStart,
    getStarsSuccess
} from "./starsReducer";
import { 
    moviesFailure,
    moviesStart,
    getMoviesSuccess
} from "./moviesReducer";
import { 
    displayFailure,
    displayStart,
    getDisplaySuccess
} from "./displayReducer";
import { 
    seriesFailure,
    seriesStart,
    getSeriesSuccess
} from "./seriesReducer";
import { 
    newFailure,
    newStart,
    getNewSuccess
} from "./newReducer";
import { 
    popularFailure,
    popularStart,
    getPopularSuccess
} from "./popularReducer";
import { getWatchSuccess, watchFailure, watchStart } from "./watchReducer";
import { getBioFromHTML, splitCamelCase } from "../helperFunctions";

export const getDisplay = async (dispatch) => {
    dispatch(displayStart());
    try {
        const res = await request.get("/config/stars/display");
        dispatch(getDisplaySuccess(res.data));
        console.log("%cSuccess display","color:green;font-size:24px;",res.data)
    } catch (err) {
        dispatch(displayFailure());
        console.log("%cDisplay ERROR","color:red;font-size:24px;",err)
    }
}

export const getStars = async (dispatch) => {
    dispatch(starsStart());
    try {
        const res = await request.get("/config/stars");
        dispatch(getStarsSuccess(res.data));
        console.log("%cSuccess stars","color:green;font-size:24px;",res.data)
    } catch (err) {
        dispatch(starsFailure());
        console.log("%cERROR","color:red;font-size:24px;",err)
    }
}

export const getMovies = async (dispatch) => {
    dispatch(moviesStart());
    try {
        const res = await request.get("/config/movies");
        dispatch(getMoviesSuccess(res.data));
        console.log("%cSuccess movies","color:green;font-size:24px;",res.data)
    } catch (err) {
        dispatch(moviesFailure());
        console.log("%cERROR","color:red;font-size:24px;",err)
    }
}
export const getSeries = async (dispatch) => {
    dispatch(seriesStart());
    try {
        const res = await request.get("/config/series");
        dispatch(getSeriesSuccess(res.data));
        console.log("%cSuccess series","color:green;font-size:24px;",res.data)
    } catch (err) {
        dispatch(seriesFailure());
        console.log("%cERROR","color:red;font-size:24px;",err)
    }
}
export const getNew = async (dispatch) => {
    dispatch(newStart());
    try {
        const res = await request.get("/config/new");
        dispatch(getNewSuccess(res.data));
        console.log("%cSuccess new","color:green;font-size:24px;",res.data)
    } catch (err) {
        dispatch(newFailure());
        console.log("%cERROR","color:red;font-size:24px;",err)
    }
}
export const getPopular = async (dispatch) => {
    dispatch(popularStart());
    try {
        const res = await request.get("/config/popular");
        dispatch(getPopularSuccess(res.data));
        console.log("%cSuccess popular","color:green;font-size:24px;",res.data)
    } catch (err) {
        dispatch(popularFailure());
        console.log("%cERROR","color:red;font-size:24px;",err)
    }
}

export const putObj = async (id,data) => {
    try {
        const res = await request.put("/config/stars/display/" + id, data);
        console.log("%cPut Success","color:green;font-size:24px;",res.data)
    } catch (err) {
        console.log("%cPut ERROR","color:red;font-size:24px;",err)
    }
}

export const getObj = async (dispatch, id) => {
    dispatch(watchStart());
    try {
        const res = await request.get("/config/watch/" + id);
        dispatch(getWatchSuccess(res.data._doc));
        console.log("%cGot video Success","color:green;font-size:18px;",res.data)
    } catch (err) {
        dispatch(watchFailure());
        console.log("%cGot video ERROR","color:red;font-size:24px;",err)
    }
}
export const getBio = async (name) => {
    try {
        const res = await bio.get("/" + name);
        // console.log("%cGot bio Success","color:green;font-size:12px;",res.data);
        return res.data;
    } catch (err) {
        console.log("%cGot bio ERROR","color:red;font-size:24px;",err);
        return false;
    }
}

