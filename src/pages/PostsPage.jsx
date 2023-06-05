import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
// https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20&title_like=qu

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = Object.values(useSelector((state) => state.posts.posts));
  console.log('Posts ', posts);

  useEffect(() => {
    dispatch({ type: 'LOAD_POSTS' });
  }, []);
  return (
    <Container>
      {posts ? (
        posts.map((post) => (<Post post={post} />))
      ) : (
        <h1>Loading</h1>
      )}
    </Container>
  );
};

export default PostsPage;
