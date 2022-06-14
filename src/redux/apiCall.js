import { request } from "../requestMethods";
import { 
    starsFailure,
    starsStart,
    getStarsSuccess
} from "./starsReducer";

export const getStars = async (dispatch) => {
    dispatch(starsStart());
    try {
        const res = await request.get("/config/stars");
        dispatch(getStarsSuccess(res.data));
        console.log("%cSuccess","color:green;font-size:24px;",res)
    } catch (err) {
        dispatch(starsFailure());
        console.log("%cERROR","color:red;font-size:24px;",err)
    }
}

