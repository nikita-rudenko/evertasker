import { put, takeLatest, call, select } from 'redux-saga/effects';

// Actions
import * as types from './types';
// Selectors
import * as selectors from './selectors';
// API
import { getTasks } from '../../../api/tasks';



function* doGetTasks({ currentCategory }) {
    try {
        const { data } = yield call(getTasks);
        const isFullView = yield select(selectors.getIsFullView);

        const dataByCategory = data.tasks.filter(task => {
            if (currentCategory === task.status || currentCategory === 0) {
                return task;
            } else {
                return null;
            }
        });

        yield put({
            type: types.GET_TASKS_SUCCESS,
            payload: {
                tasksData: dataByCategory,
                openedTaskId:
                    dataByCategory.length > 0 && isFullView
                        ? dataByCategory[0].id
                        : null
            }
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
