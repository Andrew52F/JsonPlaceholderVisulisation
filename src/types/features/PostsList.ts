import { IComment, IPost } from '..';

export interface PostsListProps {
  title: string,
  path: string,
}
export interface SearchInputParams {
  onSubmit: (newValue: string) => void,
  initialValue: string,
}
export interface SortDropdownProps {
  initialValue: string | null,
  onSelect: (order: string) => void,
}
export interface PaginationControlProps {
  pagesCount: number,
  activePage: number,
  setPage: (pageNumber: number) => void,
}

export interface PostProps {
  post: IPost,
  comments: IComment[] | null,
  isActiveComments: boolean,
  onCommentButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  commentsState: string,
}
