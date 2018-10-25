import {apiInstance} from "../../../utils/api";

const api = 'http://localhost:5000';
//const api = 'https://mbo-animal-tracker-api.herokuapp.com'

const bearer = 'Bearer '+ localStorage.getItem('accessToken');
const headers = {
    'Accept': 'application/json',
    'Authorization': bearer,
    'Content-Type': 'application/json',
    'mode':  "cors"
};

export const getAllAnimals = () =>
    apiInstance.get('/animals').then(res => res.data);

export const addAnimal = (animal) =>
    apiInstance.post('/animals', animal).then(res => res.data);

export const deleteAnimal = (id) =>
    apiInstance.delete('/animal/'+id);