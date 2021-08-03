
import axios from "axios";

export const nasaApi = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/',
    timeout: 5000
})
