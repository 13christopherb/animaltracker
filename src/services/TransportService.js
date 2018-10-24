import jwt from 'jsonwebtoken';

const api = 'http://localhost:5000';
//const api = 'https://mbo-animal-tracker-api.herokuapp.com'

const bearer = 'Bearer ' + localStorage.getItem('accessToken');
const headers = new Headers({
    'Accept': 'application/json',
    'Authorization': bearer,
    'Content-Type': 'application/json',
    'mode': "cors"
});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getAllTransports = () =>
    fetch(api + '/transports', {
        method: 'GET',
        headers: headers
    }).then(handleErrors).then(res => res.json());

export const addTransport = (transport) =>
    fetch(api + `/transports`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(transport)
    }).then(handleErrors).then(res => res.json());

export const deleteTransport = (id) =>
    fetch(api + '/transports/' + id, {
        method: 'DELETE',
        headers: headers,
        body: id
    }).then(handleErrors).then(res => res.json());

const checkToken = (func) => {
    if (isExpired(localStorage.getItem('accessTotken'))) {
        fetch(api + '/token/refresh', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('refreshTotken'),
                'Content-Type': 'application/json',
                'mode': "cors"
            }
        }).then(handleErrors).then(token => {
            if (token.accessToken) {
                localStorage.setItem('accessToken', token.accessToken);
            }
        })
    }
};

const isExpired = (token) => {
    if (token && jwt.decode(token)) {
        const expiry = jwt.decode(token).exp;
        const now = new Date();
        return now.getTime() > expiry * 1000;
    }
    return false;
}