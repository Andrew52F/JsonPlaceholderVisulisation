import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware({});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
