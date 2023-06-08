/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink } from 'react-router-dom';
import UserImage from './UserImage';
import PostsListMessage from './PostsListMessage';

const Post = ({
  post = {},
  onCommentButtonClick,
  comments = null,
  isActiveComments = false,
  commentsState,
}) => (
  <Card className='pe-2 overflow-hidden'>
    <Row>
      <Col className='col-auto pe-0 m-2'>
        <NavLink to={`/user/${post.userId}`}>
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
            {commentsState === 'fulfilled' && (comments.length ? (
              comments.map((comment) => (
                <ListGroup.Item key={comment.name}>
                  <h5>{comment.email}</h5>
                  <span>{comment.body}</span>
                </ListGroup.Item>
              ))
            ) : (
              <PostsListMessage title='У этого поста покачто отсутствуют комментарии' />
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

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  comments: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        name: PropTypes.string,
      }),
    ),
    PropTypes.oneOf([null]),
  ]),
  isActiveComments: PropTypes.bool.isRequired,
  onCommentButtonClick: PropTypes.func,
  commentsState: PropTypes.string,

};

export default Post;
