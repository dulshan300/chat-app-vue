import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {
        'Accept': 'application/json'
    }
});

api.defaults.withCredentials = true;
api.defaults.withXSRFToken = true;

export default api