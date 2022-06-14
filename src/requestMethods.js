import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

export const request = axios.create({
    baseURL: BASE_URL
})