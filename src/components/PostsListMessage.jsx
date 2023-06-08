import React from 'react';
import PropTypes from 'prop-types';

const PostsListMessage = ({ title, message = '' }) => (
  <div className='pt-4 text-center'>
    <h3>{title}</h3>
    {message && <p className='fs-5'>{message}</p>}
  </div>
);
PostsListMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default PostsListMessage;
