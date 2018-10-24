import axios from "axios";
import jwt from 'jsonwebtoken';

const isExpired = (token) => {
    if (token && jwt.decode(token)) {
        const expiry = jwt.decode(token).exp;
        const now = new Date();
        return now.getTime() > expiry * 1000;
    }
    return false;
}

export const createApiInstance = () => {
    const api = 'http://localhost:5000';
    //const api = 'https://mbo-animal-tracker-api.herokuapp.com'

    const bearer = 'Bearer ' + localStorage.getItem('accessToken');
    const headers = {
        'Accept': 'application/json',
        'Authorization': bearer,
        'Content-Type': 'application/json',
        'mode': "cors"
    };
    const instance = axios.create({
        baseURL: api,
        headers: headers
    });

    instance.interceptors.request.use(config => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            return {
                ...config
            };
        }

        return config;
    });

    const is401 = error => error.response && error.response.status === 401;

    /**
     * Interceptor to check if accessToken needs to be refreshed. If instance receives
     * HTTP 401, has a valid refresh token, and an expired access token, it will request a new
     * access token from API
     */
    instance.interceptors.response.use(
        response => response,
        error => {
            if (typeof window === 'undefined') {
                throw error;
            }
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');


            if (refreshToken && isExpired(accessToken) && is401(error)) {
                return fetch(api + '/token/refresh', {      //Use fetch because of need for header with refreshToken
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+ refreshToken
                    }
                }).then(res => res.json()).then(data => {
                    localStorage.setItem('accessToken', data['accessToken']);
                    const config = {
                        ...error.config,
                        headers: {...error.config.headers, 'Authorization': 'Bearer ' + data['accessToken']},
                    };
                    return instance(config);
                }).catch(refreshTokenError => {
                        console.log('refresh token error', refreshTokenError);
                        throw error;
                    });
            }

            throw error;
        });
    return instance;
};