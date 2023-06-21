/* eslint-disable no-console */
/* eslint-disable func-names */
import { call, all, spawn } from 'redux-saga/effects';
import { SagaWatcher } from '../../types/redux';

import watchLoadPosts from './loadPostsSaga';
import watchLoadComments from './loadCommentsSaga';
import watchLoadUserInfo from './loadUserInfoSaga';

export default function* rootSaga() {
  const sagas = [watchLoadPosts, watchLoadComments, watchLoadUserInfo];

  const retrySagas: Generator<SagaWatcher>[] = yield sagas
    .map((saga) => spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.error('Saga error ', e);
        }
      }
    }));

  yield all(retrySagas);
}
