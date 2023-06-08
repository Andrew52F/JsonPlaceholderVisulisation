/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import Post from '../components/Post';
import PaginationControl from '../components/PaginationControl';
import SearchInput from '../components/SearchInput';
import DropDown from '../components/DropDown';
import PostsListMessage from '../components/PostsListMessage';

const PostsList = ({ title = '', path }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {
    posts, comments, pagesCount, postsState, commentsState,
  } = useSelector((state) => state.posts);
  const [commentsPostId, setCommentsPostId] = useState(null);
  // console.log('Search ', searchParams);

  useEffect(() => {
    dispatch({ type: 'LOAD_POSTS', payload: { searchParams, path } });
  }, [searchParams.toString()]);

  const handleCommentButtonClick = (postId) => (e) => {
    if (commentsPostId === postId) {
      setCommentsPostId(null);
      dispatch({ type: 'REMOVE_COMMENTS' });
    } else {
      setCommentsPostId(postId);
      dispatch({ type: 'REMOVE_COMMENTS' });
      dispatch({ type: 'LOAD_COMMENTS', payload: postId });
    }
  };

  const setPageParam = (pageNumber) => {
    setSearchParams((prevParams) => {
      prevParams.set('_page', pageNumber || 1);
      return prevParams;
    });
  };
  const setSearchParam = (searchString) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (searchString === '') {
        newParams.delete('title_like');
      } else {
        newParams.set('title_like', searchString);
      }
      newParams.set('_page', 1);
      return newParams;
    });
  };
  const setOrderParam = (orderValue) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      console.log('ORDER PARAM ', orderValue);
      console.log('SEARCH PARAMS ', newParams);
      if (!orderValue) {
        newParams.delete('_sort');
        newParams.delete('_order');
      } else {
        newParams.set('_sort', 'title');
        newParams.set('_order', orderValue);
      }
      newParams.set('_page', 1);
      return newParams;
    });
  };
  return (
    <>
      {title && <h1 className='my-4'>Список постов</h1>}
      <Row>
        <Col className='col-lg-5'>
          <SearchInput initialValue={searchParams.get('title_like')} onSubmit={setSearchParam} />
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
              <PostsListMessage title='Нет постов по вашему запросу' message='Попробуйте изменить запрос' />
            )
          )}
          {postsState === 'rejected' && (
            <PostsListMessage title='Что-то пошло не так' message='Повторите попытку позже' />
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

PostsList.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default PostsList;
