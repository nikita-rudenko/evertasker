import * as types from './types';



export const getTasks = currentCategory => ({
    type: types.GET_TASKS_REQUEST,
    currentCategory
});


export const openTask = id => ({
    type: types.OPEN_TASK,
    payload: id
});
