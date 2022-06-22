import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BIO_URL = process.env.REACT_APP_BIO_URL;

export const request = axios.create({
    baseURL: BASE_URL
});
export const bio = axios.create({
    baseURL: BIO_URL
});