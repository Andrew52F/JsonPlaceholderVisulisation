import { put, call, takeEvery } from 'redux-saga/effects';
import getJSONPlaceholderData from '../../services/fetchData';

export function* workerLoadCommentsData(action) {
  try {
    yield put({ type: 'SET_COMMENTS_STATE', payload: 'pending' });
    const postId = action.payload;
    const response = yield call(getJSONPlaceholderData, `posts/${postId}/comments/`);
    yield put({ type: 'STORE_COMMENTS', payload: response.data });
    yield put({ type: 'SET_COMMENTS_STATE', payload: 'fulfilled' });
  } catch (error) {
    yield put({ type: 'STORE_COMMENTS', payload: [] });
    yield put({ type: 'SET_COMMENTS_STATE', payload: 'rejected' });
  }
}

function* watchLoadComments() {
  yield takeEvery('LOAD_COMMENTS', workerLoadCommentsData);
}

export default watchLoadComments;
