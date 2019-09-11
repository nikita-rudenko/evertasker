import * as types from './types';



export const initialState = {
    tasksData: [],
    error: {},
    isLoading: false
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case types.GET_TASKS_REQUEST:
        return {
            ...state,
            isLoading: true
        };

    case types.GET_TASKS_SUCCESS:
        return {
            ...state,
            tasksData: payload.data.tasks,
            isLoading: false
        };

    case types.GET_TASKS_FAILURE:
        return {
            ...state,
            error: payload,
            isLoading: false
        };

    default:
        return state;
    }
};
