import React from 'react';
import { MessageProps } from '../types/features';

const Message: React.FC<MessageProps> = ({ title, message = '' }) => (
  <div className='pt-4 text-center'>
    <h3>{title}</h3>
    {message && <p className='fs-5'>{message}</p>}
  </div>
);

export default Message;
