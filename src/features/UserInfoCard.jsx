/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Badge,
  Card, CardGroup, Col, Row, Spinner,
} from 'react-bootstrap';
import UserImage from '../components/UserImage';
import CardSection from '../components/CardSection';
import YandexMap from '../components/YandexMap';
import PostsListMessage from '../components/PostsListMessage';

const UserInfoCard = ({ path }) => {
  const dispatch = useDispatch();
  const { userData, userState } = useSelector((state) => state.userInfo);
  console.log('PATH ', path);
  useEffect(() => {
    dispatch({ type: 'LOAD_USER_INFO', payload: { path } });
  }, []);

  return (
    <>
      <Row className='py-3'>
        <Col className='col-12 col-md-auto'>
          <div className='d-flex justify-content-md-start justify-content-center'>
            <UserImage options={{
              width: '100px', height: '100px',
            }}
            />
          </div>
        </Col>
        <Col className='col-md-auto'>
          <div className='py-2 py-md-0 text-center text-md-start'>
            <h2>{userData.username || '...'}</h2>
            <p className='fs-5'>{userData.name || '...'}</p>
          </div>
        </Col>
      </Row>
      {userState === 'fulfilled' && (
        <>
          <Row>
            <Col>
              <CardGroup>
                {!!userData.contacts && (
                <CardSection title='Контакты' options={Object.entries(userData.contacts)} />
                )}
                {!!userData.company && (
                <CardSection title='Место работы' options={Object.entries(userData.company).filter(([key]) => key !== 'bs')}>
                  <div className='d-flex gap-2 flex-wrap'>
                    {userData.company.bs.map((text) => (
                      <Badge
                        key={text}
                        pill
                        bg='primary'
                        className='fs-6'
                      >
                        {text}
                      </Badge>
                    ))}
                  </div>
                </CardSection>
                )}
              </CardGroup>
            </Col>
          </Row>
          {!!userData.address && (
          <Row className='pt-sm-2'>
            <Col>
              <CardSection title='Адрес' options={[['address', `${userData.address.city}, ${userData.address.street}, ${userData.address.suite}`]]}>
                {userState === 'fulfilled' && (<YandexMap geo={Object.values(userData.address.geo)} />)}
              </CardSection>
            </Col>
          </Row>
          )}
        </>
      )}
      {userState === 'pending' && (
        <div
          className='d-flex justify-content-center align-items-center p-6'
        >
          <Spinner
            animation='border'
            role='status'
            variant='primary'
          />
        </div>
      )}
      {userState === 'rejected' && (
        <PostsListMessage title='Что-то пошло не так' message='Повторите попытку позже' />
      )}
    </>

  );
};

UserInfoCard.propTypes = {
  path: PropTypes.string.isRequired,
};

export default UserInfoCard;
