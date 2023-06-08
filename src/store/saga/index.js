import { call, all, spawn } from 'redux-saga/effects';

import watchLoadPosts from './loadPostsSaga';
import watchLoadComments from './loadCommentsSaga';

export default function* rootSaga() {
  console.log('Saga is ready !');

  const sagas = [watchLoadPosts, watchLoadComments];

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
