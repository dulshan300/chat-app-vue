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

api.setAuthHeader = (token) => {    
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api