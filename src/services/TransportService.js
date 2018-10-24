import {createApiInstance} from "../helpers/api";



const instance = createApiInstance();

export const getAllTransports = () =>
    instance.get('/transports').then(res => res.data);

export const addTransport = (transport) =>
    instance.post('/transports', transport).then(res => res.data);

export const deleteTransport = (id) =>
    instance.delete('/transport/'+id);