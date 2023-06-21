/* eslint-disable react/require-default-props */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink } from 'react-router-dom';
import UserImage from '../UserImage';
import PostsListMessage from '../Message';
import { PostProps } from '../../types/features';

const Post: React.FC<PostProps> = ({
  post,
  onCommentButtonClick,
  comments = null,
  isActiveComments = false,
  commentsState,
}) => (
  <Card className='pe-2 overflow-hidden'>
    <Row>
      <Col className='col-auto pe-0 m-2'>
        <NavLink to={`/user/${post.userId}?_page=1&_limit=20`}>
          <UserImage />
        </NavLink>
      </Col>
      <Col className='border-start px-0'>
        <Card.Header>
          <Card.Title>{post.title}</Card.Title>
        </Card.Header>
        <Card.Body>{post.body}</Card.Body>
        <Card.Footer>
          <Button variant='outline-primary' active={isActiveComments} onClick={onCommentButtonClick}>Комментарии</Button>
        </Card.Footer>

        {isActiveComments && (
          <ListGroup className='list-group-flush border-top'>
            {commentsState === 'fulfilled' && comments && (comments.length ? (
              comments.map((comment) => (
                <ListGroup.Item key={comment.name}>
                  <h5>{comment.email}</h5>
                  <span>{comment.body}</span>
                </ListGroup.Item>
              ))
            ) : (
              <PostsListMessage title='У этого поста еще нет комментарии' />
            ))}
            {commentsState === 'pending' && (
              <div className='d-flex justify-content-center py-3'>
                <Spinner animation='border' role='status' variant='primary' />
              </div>
            )}
            {commentsState === 'rejected' && (
              <PostsListMessage title='Что-то пошло не так' message='Повторите попытку позже' />
            )}
          </ListGroup>
        )}
      </Col>
    </Row>
  </Card>
);

export default Post;
