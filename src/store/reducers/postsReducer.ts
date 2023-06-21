/* eslint-disable @typescript-eslint/default-param-last */

import { PostsState, PostsActionTypes } from '../../types/redux';

import {
  SET_POSTS_STATE,
  STORE_POSTS,
  SET_PAGES_COUNT,
} from '../actionTypes';

const initialState: PostsState = {
  postsState: 'fulfilled',
  posts: [],
  pagesCount: null,
};

const postsReducer = (state = initialState, action: PostsActionTypes): PostsState => {
  switch (action.type) {
    case SET_POSTS_STATE: {
      return { ...state, postsState: action.payload };
    }
    case STORE_POSTS: {
      const newState = {
        ...state,
        posts: [
          ...action.payload,
        ],
      };
      return newState;
    }
    case SET_PAGES_COUNT: {
      return {
        ...state,
        pagesCount: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
