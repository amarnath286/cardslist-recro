import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Saga } from './Saga';
import { State } from './State';

const initialState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(thunk);
middlewares.push(sagaMiddleware);

let createStoreWithMiddleware = applyMiddleware(...middlewares);

const finalCreateStore = createStoreWithMiddleware(createStore);
const Store = finalCreateStore(State.Reducer(), initialState);
sagaMiddleware.run(Saga.GetWatcher);

window.Store = Store;

export { Store };