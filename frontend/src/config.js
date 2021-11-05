import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://travel-app22.herokuapp.com/api/"
});