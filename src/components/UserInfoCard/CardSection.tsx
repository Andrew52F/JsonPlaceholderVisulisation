import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { CardSectionProps } from '../../types/features';

const CardSection: React.FC<CardSectionProps> = ({ title, options = [], children = '' }) => (
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
        {options.map((li) => {
          const isArray = Array.isArray(li);
          return (
            <ListGroup.Item key={isArray ? li[0] : li}>
              {isArray ? (
                <>
                  <span className='fw-semibold'>{`${li[0]}: `}</span>
                  {` ${li[1]}`}
                </>
              ) : (
                <span>{li}</span>
              )}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {children && (
        <div className='p-2'>
          {children}
        </div>
      )}
    </Card.Body>
  </Card>

);

export default CardSection;
