import { get } from './base';



export const getTasks = () => {
    return get('/tasks/').then(({ data }) => data);
};
