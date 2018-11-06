import axios from "axios";

const api = 'http://localhost:5000';
//const api = 'https://mbo-animal-tracker-api.herokuapp.com';

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