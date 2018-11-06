import {apiInstance} from "../../../utils/api";

export const getAllTransports = () =>
    apiInstance.get('/transports').then(res => res.data);

export const deleteTransport = (id) =>
    apiInstance.delete('/transport/'+id);