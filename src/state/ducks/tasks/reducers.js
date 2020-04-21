import * as types from './types';



export const initialState = {
    tasksData: [],
    openedTaskId: null,
    isFullView: false,
    error: {},
    isPristine: true,
    isLoading: false
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case types.GET_TASKS_REQUEST:
        return {
            ...state,
            openedTaskId: null,
            isPristine: false,
            isLoading: true
        };

    case types.GET_TASKS_SUCCESS:
        return {
            ...state,
            tasksData: payload.tasksData,
            openedTaskId: payload.openedTaskId,
            isLoading: false
        };

    case types.GET_TASKS_FAILURE:
        return {
            ...state,
            error: payload,
            isLoading: false
        };

    case types.OPEN_TASK:
        return {
            ...state,
            isFullView: true,
            openedTaskId: payload
        };

    default:
        return state;
    }
};
