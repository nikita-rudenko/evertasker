import { put, takeLatest, call } from 'redux-saga/effects';

// Actions
import * as types from './types';
// API
import { getTasks } from '../../../api/tasks';



function* doGetTasks() {
    try {
        const result = yield call(getTasks);
        yield put({
            type: types.GET_TASKS_SUCCESS,
            payload: result
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
