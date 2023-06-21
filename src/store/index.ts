/* eslint-disable @typescript-eslint/dot-notation */
import createSagaMiddleware, { Saga } from 'redux-saga';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware({});

const store: Store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga as Saga);

export const setupStore = () => store;

export default store;

// export type AppStore = ReturnType<typeof setupStore>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
