import { request } from "../requestMethods";
import { 
    starsFailure,
    starsStart,
    getStarsSuccess
} from "./starsReducer";
import { 
    displayFailure,
    displayStart,
    getDisplaySuccess
} from "./displayReducer";
import { getWatchSuccess, watchFailure, watchStart } from "./watchReducer";

export const getDisplay = async (dispatch) => {
    dispatch(displayStart());
    try {
        const res = await request.get("/config/stars/display");
        dispatch(getDisplaySuccess(res.data));
        console.log("%cDisplay Success","color:green;font-size:24px;",res.data)
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
        console.log("%cSuccess","color:green;font-size:24px;",res.data)
    } catch (err) {
        dispatch(starsFailure());
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
