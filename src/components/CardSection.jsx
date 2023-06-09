import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

const CardSection = ({ title = '', options = [], children = null }) => (
  <Card>
    {title && (
    <Card.Header>
      <Card.Title>
        {title}
      </Card.Title>
    </Card.Header>
    )}
    <Card.Body className='p-0'>
      <ListGroup className='list-group-flush'>
        {options.map(([key, value]) => (
          <ListGroup.Item key={key}>
            <span className='fw-semibold'>{`${key}: `}</span>
            {' '}
            {value}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {children && (
        <div className='p-2'>
          {children}
        </div>
      )}
    </Card.Body>
  </Card>

);

CardSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ),
};

export default CardSection;
