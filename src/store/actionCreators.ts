/* eslint-disable import/prefer-default-export */
import {
  AsyncStateType,
  PostsActionTypes,
  CommentsActionTypes,
  UserInfoActionTypes,
} from '../types/redux/index';
import { IPost, IComment, IUserInfoRaw } from '../types';
import {
  SET_POSTS_STATE,
  STORE_POSTS,
  SET_PAGES_COUNT,
  LOAD_POSTS,
  SET_COMMENTS_STATE,
  STORE_COMMENTS,
  REMOVE_COMMENTS,
  LOAD_COMMENTS,
  SET_USER_INFO_STATE,
  STORE_USER_INFO,
  LOAD_USER_INFO,
} from './actionTypes';

// posts
export const setPostsState = (state: AsyncStateType): PostsActionTypes => ({
  type: SET_POSTS_STATE,
  payload: state,
});
export const storePosts = (posts: IPost[]): PostsActionTypes => ({
  type: STORE_POSTS,
  payload: posts,
});
export const setPagesCount = (pagesCount: number | null): PostsActionTypes => ({
  type: SET_PAGES_COUNT,
  payload: pagesCount,
});
export const loadPosts = (
  { path, searchParams }: { path: string, searchParams: URLSearchParams },
): PostsActionTypes => ({
  type: LOAD_POSTS,
  payload: { searchParams, path },
});

// comments
export const setCommentsState = (state: AsyncStateType): CommentsActionTypes => ({
  type: SET_COMMENTS_STATE,
  payload: state,
});
export const storeComments = (comments: IComment[]): CommentsActionTypes => ({
  type: STORE_COMMENTS,
  payload: comments,
});
export const removeComments = (): CommentsActionTypes => ({
  type: REMOVE_COMMENTS,
});
export const loadComments = (postId: number): CommentsActionTypes => ({
  type: LOAD_COMMENTS,
  payload: postId,
});
// user info
export const setUserInfoState = (state: AsyncStateType): UserInfoActionTypes => ({
  type: SET_USER_INFO_STATE,
  payload: state,
});
export const storeUserInfo = (userInfo: IUserInfoRaw): UserInfoActionTypes => ({
  type: STORE_USER_INFO,
  payload: userInfo,
});
export const loadUserInfo = (path: string): UserInfoActionTypes => ({
  type: LOAD_USER_INFO,
  payload: { path },
});
