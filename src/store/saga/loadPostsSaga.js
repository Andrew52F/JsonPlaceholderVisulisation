import { put, call, takeEvery } from 'redux-saga/effects';
import { getPagesCount } from '../../utils/parseLinkHeader';
import getJSONPlaceholderData from '../../services/fetchData';

export function* workerLoadPostsData(action) {
  try {
    yield put({ type: 'SET_POSTS_STATE', payload: 'pending' });
    const { searchParams, path } = action.payload;
    const response = yield call(getJSONPlaceholderData, path || 'posts', searchParams);
    const pagesCount = (response.headers.link) ? getPagesCount(response.headers.link) : 1;
    yield put({ type: 'SET_PAGES_COUNT', payload: pagesCount });
    yield put({ type: 'STORE_POSTS', payload: response.data });
    yield put({ type: 'SET_POSTS_STATE', payload: 'fulfilled' });
  } catch (error) {
    yield put({ type: 'SET_PAGES_COUNT', payload: null });
    yield put({ type: 'STORE_POSTS', payload: [] });
    yield put({ type: 'SET_POSTS_STATE', payload: 'rejected' });
  }
}

function* watchLoadPosts() { // Описывает actions, которые происходят в приложении
  yield takeEvery('LOAD_POSTS', workerLoadPostsData);
}

export default watchLoadPosts;
