const api = 'http://localhost:5000'

let token = 'test'

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json',
    'mode':  "cors"
}

export const getAllAnimals = () =>
    fetch(api+ '/animals', {
        method: 'GET',
        headers: headers
    }).then(res => res.json())

export const postAnimal = (animal) =>
    fetch(api + `/animals`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(animal)
    }).then(res => res.json())