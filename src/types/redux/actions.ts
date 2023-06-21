import {
  SET_POSTS_STATE,
  SET_COMMENTS_STATE,
  STORE_POSTS,
  STORE_COMMENTS,
  REMOVE_COMMENTS,
  SET_PAGES_COUNT,
  LOAD_POSTS,
  LOAD_COMMENTS,
  SET_USER_INFO_STATE,
  STORE_USER_INFO,
  LOAD_USER_INFO,
} from '../../store/actionTypes';

import { IComment, IPost, IUserInfoRaw } from '..';

export type AsyncStateType = 'fulfilled' | 'pending' | 'rejected';

// posts
type ISetPostsStateAction = {
  type: typeof SET_POSTS_STATE,
  payload: AsyncStateType,
};
type IStorePostsAction = {
  type: typeof STORE_POSTS,
  payload: IPost[],
};
type ISetPagesCountAction = {
  type: typeof SET_PAGES_COUNT,
  payload: number | null,
};
export type ILoadPostsAction = {
  type: typeof LOAD_POSTS,
  payload: {
    searchParams: URLSearchParams,
    path: string,
  }
};
export type PostsActionTypes = (
  ISetPostsStateAction | IStorePostsAction | ISetPagesCountAction | ILoadPostsAction
);

// comments
type ISetCommentsStateAction = {
  type: typeof SET_COMMENTS_STATE,
  payload: AsyncStateType,
};
type IStoreCommentsAction = {
  type: typeof STORE_COMMENTS,
  payload: IComment[],
};
type IRemoveCommentsAction = {
  type: typeof REMOVE_COMMENTS,
};
export type ILoadCommentsAction = {
  type: typeof LOAD_COMMENTS,
  payload: number,
};

export type CommentsActionTypes = (
  ISetCommentsStateAction | IStoreCommentsAction | IRemoveCommentsAction | ILoadCommentsAction
);

// user info
type ISetUserInfoStateAction = {
  type: typeof SET_USER_INFO_STATE,
  payload: AsyncStateType,
};
type IStoreUserInfoAction = {
  type: typeof STORE_USER_INFO,
  payload: IUserInfoRaw,
};
export type ILoadUserInfoAction = {
  type: typeof LOAD_USER_INFO,
  payload: { path: string },
};

export type UserInfoActionTypes = (
  ISetUserInfoStateAction | IStoreUserInfoAction | ILoadUserInfoAction
);
