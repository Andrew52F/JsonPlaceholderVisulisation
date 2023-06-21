import React from 'react';
import { Container } from 'react-bootstrap';
import PostsList from '../features/PostsList';

const PostsPage: React.FC = () => (
  <Container className='d-flex flex-column flex-grow-1'>
    <PostsList title='Список постов' path='posts' />
  </Container>
);

export default PostsPage;
