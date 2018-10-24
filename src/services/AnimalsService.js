import {createApiInstance} from "../helpers/api";

const api = 'http://localhost:5000';
//const api = 'https://mbo-animal-tracker-api.herokuapp.com'

const bearer = 'Bearer '+ localStorage.getItem('accessToken');
const headers = {
    'Accept': 'application/json',
    'Authorization': bearer,
    'Content-Type': 'application/json',
    'mode':  "cors"
};

const instance = createApiInstance();

export const getAllAnimals = () =>
    instance.get('/animals').then(res => res.data);

export const addAnimal = (animal) =>
    instance.post('/animals', animal).then(res => res.data);

export const deleteAnimal = (id) =>
    instance.delete('/animal/'+id);