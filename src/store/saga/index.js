import {
  put, call, spawn, all, takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';

async function getJSONPlaceholderData(endpoint, params) {
  const request = await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`, { params });
  console.log('axios worked');
  return request.data;
}

// Описывает логику: фетчи, обработка браузерного апи, и остальная асинхронщина
// eslint-disable-next-line require-yield
export function* workerLoadDataSaga(action) {
  const data = yield call(getJSONPlaceholderData, 'posts', action.payload);
  yield put({ type: 'STORE_POSTS', payload: data });
}

export function* watchLoadPosts() { // Описывает actions, которые происходят в приложении
  yield takeEvery('LOAD_POSTS', workerLoadDataSaga);
}

export default function* rootSaga() {
  console.log('Saga is ready !');

  const sagas = [watchLoadPosts];

  const retrySagas = yield sagas.map((saga) => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e) {
        console.log('Saga error ', e);
      }
    }
  }));

  yield all(retrySagas);
}
