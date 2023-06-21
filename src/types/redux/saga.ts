import { CallEffect, PutEffect, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux';
import { CommentsActionTypes, PostsActionTypes, UserInfoActionTypes } from './actions';

import { FetchResponse } from '..';

type SagaWorker<T extends Action<any>> = Generator<
PutEffect<T> | CallEffect<FetchResponse>,
void,
FetchResponse
>;

export type LoadPostsWorker = SagaWorker<PostsActionTypes>;

export type LoadCommentsWorker = SagaWorker<CommentsActionTypes>;

export type LoadUserInfoWorker = SagaWorker<UserInfoActionTypes>;

export type SagaWatcher = Generator<
ReturnType<typeof takeEvery>,
void,
unknown
>;
