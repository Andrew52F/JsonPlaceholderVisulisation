import { put, call, takeEvery } from 'redux-saga/effects';
import getJSONPlaceholderData from '../../services/fetchData';

import { setUserInfoState, storeUserInfo } from '../actionCreators';
import { LOAD_USER_INFO } from '../actionTypes';
import {
  LoadUserInfoWorker,
  SagaWatcher,
  ILoadUserInfoAction,
} from '../../types/redux';
import { IUserInfoRaw, FetchResponse } from '../../types';

export function* workerLoadUserInfo(action: ILoadUserInfoAction): LoadUserInfoWorker {
  try {
    yield put(setUserInfoState('pending'));
    const { path } = action.payload;
    const response: FetchResponse = yield call(getJSONPlaceholderData, path);
    yield put(storeUserInfo(response.data as IUserInfoRaw));
    yield put(setUserInfoState('fulfilled'));
  } catch (error) {
    yield put(storeUserInfo({} as IUserInfoRaw));
    yield put(setUserInfoState('rejected'));
  }
}

function* watchLoadUserInfo(): SagaWatcher {
  yield takeEvery(LOAD_USER_INFO, workerLoadUserInfo);
}

export default watchLoadUserInfo;
