// import { AxiosResponse } from 'axios';
import { AsyncStateType } from './actions';
import { IPost, IComment, IUserInfo } from '..';

export * from './saga';
export * from './actions';

// export type AsyncStateType = 'fulfilled' | 'pending' | 'rejected';

export interface PostsState {
  postsState: AsyncStateType,
  posts: IPost[],
  pagesCount: number | null,
}

export interface CommentsState {
  commentsState: AsyncStateType,
  comments: IComment[],
}

export interface UserInfoState {
  userState: AsyncStateType,
  userData: IUserInfo,
}
