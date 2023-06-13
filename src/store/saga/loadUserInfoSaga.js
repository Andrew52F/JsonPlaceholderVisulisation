import { put, call, takeEvery } from 'redux-saga/effects';
import getJSONPlaceholderData from '../../services/fetchData';

export function* workerLoadUserInfo(action) {
  try {
    yield put({ type: 'SET_USER_INFO_STATE', payload: 'pending' });
    const { path } = action.payload;
    const response = yield call(getJSONPlaceholderData, path);
    yield put({ type: 'STORE_USER_INFO', payload: response.data });
    yield put({ type: 'SET_USER_INFO_STATE', payload: 'fulfilled' });
  } catch (error) {
    yield put({ type: 'STORE_USER_INFO', payload: [] });
    yield put({ type: 'SET_USER_INFO_STATE', payload: 'rejected' });
  }
}

function* watchLoadUserInfo() {
  yield takeEvery('LOAD_USER_INFO', workerLoadUserInfo);
}

export default watchLoadUserInfo;
