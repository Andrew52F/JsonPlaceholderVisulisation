/* eslint-disable @typescript-eslint/default-param-last */

import { CommentsState, CommentsActionTypes } from '../../types/redux';

import {
  SET_COMMENTS_STATE,
  STORE_COMMENTS,
  REMOVE_COMMENTS,
} from '../actionTypes';

const initialState: CommentsState = {
  commentsState: 'fulfilled',
  comments: [],
};

const commentsReducer = (state = initialState, action: CommentsActionTypes): CommentsState => {
  switch (action.type) {
    case SET_COMMENTS_STATE: {
      return { ...state, commentsState: action.payload };
    }
    case STORE_COMMENTS: {
      const data = action.payload;
      const newState = {
        ...state,
        comments: [
          ...data,
        ],
      };
      return newState;
    }
    case REMOVE_COMMENTS: {
      return {
        ...state,
        comments: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default commentsReducer;
