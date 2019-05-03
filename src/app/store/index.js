import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './saga.mock';
import * as mutations from './mutations';

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action){
            switch((action.type)) {
                case mutations.CREATE_TASK:
                    return [...tasks, {
                        id: action.taskId,
                        group: action.groupId,
                        owner: action.ownerId,
                        isComplete: false
                    }]
            }
            return tasks;
        },
        comments(comments = defaultState.comments){
            return comments;
        },
        groups(groups = defaultState.groups){
            return groups;
        },
        users(users = defaultState.users){
            return users;
        },
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas){
    sagaMiddleware.run(sagas[saga])
}