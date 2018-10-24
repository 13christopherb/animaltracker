const api = 'http://localhost:5000';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'mode': "cors"
};

export const login = (login) =>
    fetch(api + '/login', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(login)
    }).then(handleResponse)
        .then(user => {
            if (user.accessToken) {
                localStorage.setItem('user', user.username);
                localStorage.setItem('accessToken', user.accessToken);
                localStorage.setItem('refreshToken', user.refreshToken);
            }
            return user;
        });

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

export const register = (login) =>
    fetch(api + '/registration', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(login)
    }).then(res => res.json());

export const refreshToken = () =>
    fetch(api + '/token/refresh', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('refreshToken')
        }
    }).then(handleResponse).then(res => {
        if (res.accessToken) {
            localStorage.setItem('accessToken', res.accessToken);
        }
        return ''
    });

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