import {apiInstance} from "../../../utils/api";

export const addTransport = (transport) =>
    apiInstance.post('/transports', transport).then(res => res.data);
