import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Nav, Row, Col, ToggleButton,
} from 'react-bootstrap';
import NavBar from 'react-bootstrap/NavBar';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

import UserImage from './UserImage';
import { ReactComponent as BurgerIcon } from '../assets/burger-icon.svg';

const UserInfoSmall = ({ imageLink = '', fullName = '', email = '' }) => (
  <div className='d-flex gap-3'>
    <UserImage imageLink={imageLink} options={{ width: '80px', height: '80px' }} />
    <div>
      <h3 className='fs-3 fw-bold'>{fullName ?? 'User name'}</h3>
      {email && (
        <span className='fw-bold text-muted'>{email}</span>
      )}
    </div>
  </div>
);
UserInfoSmall.propTypes = {
  imageLink: PropTypes.string,
  fullName: PropTypes.string,
  email: PropTypes.string,
};

const Sidebar = ({ show = true, onHide = () => {}, navs = [] }) => (
  <Offcanvas show={show} onHide={onHide} scroll backdrop placement='start'>
    <Offcanvas.Header closeButton={!!onHide}>
      <Offcanvas.Title className='fw-bolder fs-4'>Menu</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className='d-flex flex-column justify-content-between'>
      <Nav as='nav' className='flex-column d-grid gap-2 '>
        {navs.map(({ text, to }) => (
          <Button as={NavLink} key={to} to={to} onClick={() => onHide()} variant='outline-primary' size='lg'>{text}</Button>
        ))}
      </Nav>
      <UserInfoSmall imageLink='https://res.cloudinary.com/deufljem3/image/upload/v1677510682/users/upk8wrl09cmxx6thpnnb.png' fullName='Петраков Андрей' email='andrew.petvic@gmail.com' />
    </Offcanvas.Body>
  </Offcanvas>
);
Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  navs: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })),
};

const Header = () => {
  const [show, setShow] = useState(false);
  const navs = [
    { text: 'Список постов', to: '/?_page=1&_limit=20' },
    { text: 'Обо мне', to: '/info' },
  ];
  return (
    <NavBar bg='light'>
      <Container fluid>
        <Row>
          <Col className='offset-1'>
            <ToggleButton
              id='toggle-check'
              type='checkbox'
              variant='light'
              checked={show}
              value='1'
              onChange={(e) => setShow(e.currentTarget.checked)}
            >
              <BurgerIcon />

            </ToggleButton>
          </Col>
        </Row>
        <Sidebar show={show} onHide={() => setShow(false)} navs={navs} />
      </Container>
    </NavBar>

  );
};

export default Header;
