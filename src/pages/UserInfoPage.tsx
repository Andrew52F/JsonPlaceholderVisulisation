import React from 'react';
import {
  Row, Col, Button, Container,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import PostsList from '../features/PostsList';
import UserInfoCard from '../features/UserInfoCard';

const UserInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  return (
    <Container className='d-flex flex-column flex-grow-1'>
      <Row>
        <Col className='py-1 col-auto'>
          <Button
            onClick={() => navigate(-1)}
            variant='outline-primary'
          >
            &larr; Назад
          </Button>
        </Col>
      </Row>
      <UserInfoCard path={`users/${userId}`} />
      <PostsList title='Посты пользователя' path={`users/${userId}/posts`} />
    </Container>
  );
};

export default UserInfoPage;
