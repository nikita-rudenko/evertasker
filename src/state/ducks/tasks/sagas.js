import { put, takeLatest, call } from 'redux-saga/effects';

// Actions
import * as types from './types';
// API
import { getTasks } from '../../../api/tasks';



function* doGetTasks({ currentCategory }) {
    try {
        const { data } = yield call(getTasks);

        yield put({
            type: types.GET_TASKS_SUCCESS,
            payload: data.tasks.filter(task => {
                if (currentCategory === task.status || currentCategory === 0) {
                    return task;
                } else {
                    return null;
                }
            })
        });
    } catch (error) {
        yield put({
            type: types.GET_TASKS_FAILURE,
            payload: error
        });
    }
}

export function* watchGetTasks() {
    yield takeLatest(types.GET_TASKS_REQUEST, doGetTasks);
}
