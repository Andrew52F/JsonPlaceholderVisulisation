import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
