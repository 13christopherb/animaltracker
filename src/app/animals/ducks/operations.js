import {apiInstance} from "../../../utils/api";

export const getAllAnimals = () =>
    apiInstance.get('/animals').then(res => res.data);

export const addAnimal = (animal) =>
    apiInstance.post('/animals', animal).then(res => res.data);

export const updateAnimal = (animal) =>
    apiInstance.post('/animal/' + animal.id, animal).then(res => res.data);

export const deleteAnimal = (id) =>
    apiInstance.delete('/animal/'+id);