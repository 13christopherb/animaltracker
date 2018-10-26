import {authInstance} from "../../../utils/authentication.api";

//const api = 'https://mbo-animal-tracker-api.herokuapp.com'

export const login = (login) =>
    authInstance.post('/login', JSON.stringify(login))
        .then(user => {
            if (user.data.accessToken) {
                localStorage.setItem('user', user.data.username);
                localStorage.setItem('accessToken', user.data.accessToken);
                localStorage.setItem('refreshToken', user.data.refreshToken);
            }
            return user;
        });

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

export const register = (login) =>
    authInstance.post('/registration', JSON.stringify(login)).then(res => res.data);

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusTest;
            return Promise.reject(error);
        }

        return data;
    })
}