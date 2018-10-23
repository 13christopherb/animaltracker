const api = 'http://localhost:5000'
//const api = 'https://mbo-animal-tracker-api.herokuapp.com'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'mode':  "cors"
};

export const getAllTransports = () =>
    fetch(api+ '/transports', {
        method: 'GET',
        headers: headers
    }).then(res => res.json());

export const addTransport = (transport) =>
    fetch(api + `/transports`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(transport)
    }).then(res => res.json());

export const deleteAnimal = (id) =>
    fetch(api + '/transports/' + id, {
        method: 'DELETE',
        headers: headers,
        body: id
    }).then(res => res.json());