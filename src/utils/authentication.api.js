import axios from "axios";

const api = 'http://localhost:5000';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'mode': "cors"
};

const instance = axios.create({
    baseURL: api,
    headers: headers
});

export {instance as authInstance};