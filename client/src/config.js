import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL: "http://13.232.103.11/client-part/"
})