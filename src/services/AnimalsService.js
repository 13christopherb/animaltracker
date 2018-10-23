const api = 'http://localhost:5000';
//const api = 'https://mbo-animal-tracker-api.herokuapp.com'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'mode':  "cors"
};

export const getAllAnimals = () =>
    fetch(api+ '/animals', {
        method: 'GET',
        headers: headers
    }).then(res => res.json());

export const addAnimal = (animal) =>
    fetch(api + `/animals`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(animal)
    }).then(res => res.json());

export const deleteAnimal = (id) =>
    fetch(api + '/animals/' + id, {
        method: 'DELETE',
        headers: headers,
        body: id
    }).then(res => res.json());