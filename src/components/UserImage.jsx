/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as UserIcon } from '../assets/user-icon.svg';

const UserImage = ({ imageLink = '', options = {} }) => (
  <div style={{ width: options.width ?? '80px', height: options.width ?? '80px' }} className='d-block  rounded-3 border border-secondary overflow-hidden flex-shrink-0'>
    {imageLink ? (
      <img src={imageLink} alt='user' className=' w-100 h-100' />
    ) : (
      <UserIcon />
    )}
  </div>
);

UserImage.propTypes = {
  imageLink: PropTypes.string,
  options: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default UserImage;
