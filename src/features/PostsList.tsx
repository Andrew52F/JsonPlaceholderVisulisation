/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

import { useSearchParams } from 'react-router-dom';
import Post from '../components/PostsList/Post';
import PaginationControl from '../components/PostsList/PaginationControl';
import SearchInput from '../components/PostsList/SearchInput';
import DropDown from '../components/PostsList/DropDown';
import Message from '../components/Message';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { PostsListProps } from '../types/features/PostsList';

const PostsList: React.FC<PostsListProps> = ({ title = '', path }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { posts, pagesCount, postsState } = useAppSelector((state) => state.posts);
  const { comments, commentsState } = useAppSelector((state) => state.comments);
  const [commentsPostId, setCommentsPostId] = useState<number | null>(null);

  useEffect(() => {
    if (!searchParams.has('_page') && !searchParams.has('_limit')) {
      setSearchParams((prevParams) => {
        prevParams.set('_page', '1');
        prevParams.set('_limit', '20');
        return prevParams;
      });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: 'LOAD_POSTS', payload: { searchParams, path } });
  }, [searchParams.toString()]);

  const handleCommentButtonClick = (postId: number) => () => {
    if (commentsPostId === postId) {
      setCommentsPostId(null);
      dispatch({ type: 'REMOVE_COMMENTS' });
    } else {
      setCommentsPostId(postId);
      dispatch({ type: 'REMOVE_COMMENTS' });
      dispatch({ type: 'LOAD_COMMENTS', payload: postId });
    }
  };

  const setPageParam = (pageNumber: number | string) => {
    setSearchParams((prevParams) => {
      prevParams.set('_page', `${pageNumber}` || '1');
      return prevParams;
    });
  };
  const setSearchParam = (searchString: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (searchString === '') {
        newParams.delete('title_like');
      } else {
        newParams.set('title_like', searchString);
      }
      newParams.set('_page', '1');
      return newParams;
    });
  };
  const setOrderParam = (orderValue: string) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (!orderValue) {
        newParams.delete('_sort');
        newParams.delete('_order');
      } else {
        newParams.set('_sort', 'title');
        newParams.set('_order', orderValue);
      }
      newParams.set('_page', '1');
      return newParams;
    });
  };
  return (
    <>
      {title && <h1 className='my-4'>{title}</h1>}
      <Row>
        <Col className='col-lg-5'>
          <SearchInput initialValue={searchParams.get('title_like') || ''} onSubmit={setSearchParam} />
        </Col>
        <Col className='col-auto'>
          <DropDown initialValue={searchParams.get('_order') || null} onSelect={setOrderParam} />
        </Col>
      </Row>

      <div className='d-flex flex-column gap-3 my-4 flex-grow-1'>
        { pagesCount && !!posts.length && (
        <Row>
          <Col>
            <PaginationControl pagesCount={pagesCount} activePage={Number(searchParams.get('_page'))} setPage={setPageParam} />
          </Col>
        </Row>
        )}
        <Row className='row-cols-1 gy-3 flex-grow-1'>
          {postsState === 'fulfilled' && (
            posts.length ? (
              posts.map((post) => (
                <Col key={post.id}>
                  <Post
                    post={post}
                    isActiveComments={post.id === commentsPostId}
                    commentsState={commentsState}
                    comments={(post.id === commentsPostId) ? comments : null}
                    onCommentButtonClick={handleCommentButtonClick(post.id)}
                  />
                </Col>
              ))
            ) : (
              <Message title='Нет постов по вашему запросу' message='Попробуйте изменить запрос' />
            )
          )}
          {postsState === 'rejected' && (
            <Message title='Что-то пошло не так' message='Повторите попытку позже' />
          )}
          {postsState === 'pending' && (
            <div
              className='d-flex justify-content-center align-items-center flex-grow-1'
            >
              <Spinner
                animation='border'
                role='status'
                variant='primary'
              />
            </div>
          )}
        </Row>
        {pagesCount && !!posts.length && (
        <Row>
          <Col>
            <PaginationControl pagesCount={pagesCount} activePage={Number(searchParams.get('_page'))} setPage={setPageParam} />
          </Col>
        </Row>
        )}
      </div>
    </>
  );
};

export default PostsList;
