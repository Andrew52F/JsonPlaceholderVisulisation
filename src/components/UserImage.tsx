/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReactComponent as UserIcon } from '../assets/user-icon.svg';
import { UserImageProps } from '../types/features';

const UserImage: React.FC<UserImageProps> = ({ imageLink = '', options = {} }) => (
  <div style={{ width: '80px', height: '80px', ...options }} className='d-block  rounded-3 border border-secondary overflow-hidden flex-shrink-0'>
    {imageLink ? (
      <img src={imageLink} alt='user' className=' w-100 h-100' />
    ) : (
      <UserIcon />
    )}
  </div>
);

export default UserImage;
