import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {apiInstance, isExpired} from "../helpers/api";

const mockAdapter = new MockAdapter(apiInstance);
const generalMockAdapter = new MockAdapter(axios);

test('Should refresh expired access token', () => {
    mockAdapter.onPost('http://localhost:5000/animals').replyOnce(401, {user: 'user'});
    mockAdapter.onPost('http://localhost:5000/animals').reply(200, {animal: {}});
    generalMockAdapter.onPost('http://localhost:5000/token/refresh').reply(200, {
        accessToken: jwt.sign({data: 'new'}, 'secret')
    });
    const expiredToken = jwt.sign({
        exp: 0,
        data: 'test'
    }, 'secret');
    const refreshToken = jwt.sign({data: 'refresh'}, 'secret');
    localStorage.setItem('accessToken', expiredToken);
    localStorage.setItem('refreshToken', refreshToken);
    return apiInstance.post('/animals').then(res => {
        expect(isExpired(localStorage.getItem('accessToken'))).toEqual(false);
    });
});