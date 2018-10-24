const api = 'http://localhost:5000';
//const api = 'https://mbo-animal-tracker-api.herokuapp.com'

const bearer = 'Bearer '+ localStorage.getItem('accessToken');
const headers = new Headers({
    'Accept': 'application/json',
    'Authorization': bearer,
    'Content-Type': 'application/json',
    'mode':  "cors"
});



function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const getAllAnimals = () =>
    fetch(api+ '/animals', {
        method: 'GET',
        withCredentials: true,
        headers: headers
    }).then(handleErrors).then(res => res.json());

export const addAnimal = (animal) =>
    fetch(api + `/animals`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(animal)
    }).then(handleErrors).then(res => res.json());

export const deleteAnimal = (id) =>
    fetch(api + '/animal/' + id, {
        method: 'DELETE',
        headers: headers,
        body: id
    }).then(handleErrors).then(res => res.json());