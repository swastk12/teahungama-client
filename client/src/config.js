import axios from "axios" 

export const axiosInstance = axios.create({
    baseURL: "http://3.110.162.5//clients/"
})