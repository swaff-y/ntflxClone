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
import { sortArray } from "../helperFunctions";

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

