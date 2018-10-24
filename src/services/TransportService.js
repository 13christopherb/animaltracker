import {apiInstance} from "../helpers/api";

export const getAllTransports = () =>
    apiInstance.get('/transports').then(res => res.data);

export const addTransport = (transport) =>
    apiInstance.post('/transports', transport).then(res => res.data);

export const deleteTransport = (id) =>
    apiInstance.delete('/transport/'+id);