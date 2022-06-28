import axios from 'axios';

const SERVER_URL = 'http://localhost:4000';

const Axios = axios.create({
    baseURL: SERVER_URL
})

export const axiosProtect = axios.create({
    baseURL: SERVER_URL,
    headers: {'content-type': 'application/json'},
    withCredentials: true

})

export default Axios