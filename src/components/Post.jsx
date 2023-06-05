import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post = {} }) => {
  const smth = [];
  return (
    <div key={post.id}>{post.id}</div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default Post;
