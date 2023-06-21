import { put, call, takeEvery } from 'redux-saga/effects';
import getJSONPlaceholderData from '../../services/fetchData';

import { setCommentsState, storeComments } from '../actionCreators';
import { LOAD_COMMENTS } from '../actionTypes';
import {
  LoadCommentsWorker,
  SagaWatcher,
  ILoadCommentsAction,
} from '../../types/redux';
import { FetchResponse, IComment } from '../../types';

export function* workerLoadCommentsData(action: ILoadCommentsAction): LoadCommentsWorker {
  try {
    yield put(setCommentsState('pending'));
    const postId = action.payload;
    const response: FetchResponse = yield call(getJSONPlaceholderData, `posts/${postId}/comments/`);
    yield put(storeComments(response.data as IComment[]));
    yield put(setCommentsState('fulfilled'));
  } catch (error) {
    yield put(storeComments([]));
    yield put(setCommentsState('rejected'));
  }
}

function* watchLoadComments(): SagaWatcher {
  yield takeEvery(LOAD_COMMENTS, workerLoadCommentsData);
}

export default watchLoadComments;
