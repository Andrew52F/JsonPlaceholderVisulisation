import { put, call, takeEvery } from 'redux-saga/effects';
import { getPagesCount } from '../../utils/parseLinkHeader';
import getJSONPlaceholderData from '../../services/fetchData';

import { setPostsState, storePosts, setPagesCount } from '../actionCreators';
import { LOAD_POSTS } from '../actionTypes';
import {
  LoadPostsWorker,
  SagaWatcher,
  ILoadPostsAction,
} from '../../types/redux';
import { FetchResponse, IPost } from '../../types';

export function* workerLoadPostsData(action: ILoadPostsAction): LoadPostsWorker {
  try {
    yield put(setPostsState('pending'));
    const { searchParams, path } = action.payload;
    const response: FetchResponse = yield call(getJSONPlaceholderData, path || 'posts', searchParams);
    const pagesCount = (response.headers.link) ? getPagesCount(response.headers.link) : null;
    yield put(setPagesCount(pagesCount));
    yield put(storePosts(response.data as IPost[]));
    yield put(setPostsState('fulfilled'));
  } catch (error) {
    yield put(setPagesCount(null));
    yield put(storePosts([]));
    yield put(setPostsState('rejected'));
  }
}

function* watchLoadPosts(): SagaWatcher {
  yield takeEvery(LOAD_POSTS, workerLoadPostsData);
}

export default watchLoadPosts;
