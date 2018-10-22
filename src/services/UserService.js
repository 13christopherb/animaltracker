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
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });

export const logout = () =>
    localStorage.removeItem('user');

export const register = (login) =>
    fetch(api + '/registration', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(login)
    }).then(res => res.json());

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