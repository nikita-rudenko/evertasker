import * as types from './types';



export const getTasks = currentCategory => ({
    type: types.GET_TASKS_REQUEST,
    currentCategory
});
