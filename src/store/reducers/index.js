import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userInfoReducer from './userInfoReducer';

export default combineReducers({
  posts: postsReducer,
  userInfo: userInfoReducer,
});
