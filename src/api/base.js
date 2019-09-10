import axios from 'axios';

import { BASE_URL } from '../config';



const api = axios.create({
    baseURL: BASE_URL
});

export function request({ method, url, data, headers, params }) {
    return api({
        method,
        url,
        data,
        headers,
        params
    });
}

export const get = (path, params, headers) => {
    return request({
        method: 'GET',
        url: path,
        params: {
            ...params
        },
        headers
    });
};
