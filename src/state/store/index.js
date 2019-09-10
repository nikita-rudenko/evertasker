import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// Ducks
import tasks, { sagas as tasksSagas } from '../ducks/tasks';



const rootSaga = function*() {
    yield all([
        tasksSagas.watchGetTasks()
    ]);
};

const rootReducer = combineReducers({
    tasks
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
