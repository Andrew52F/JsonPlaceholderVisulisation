import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import Header from './components/Header';
import UserInfoPage from './pages/UserInfoPage';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<PostsPage />} />
      <Route path='/user/:userId' element={<UserInfoPage />} />
      <Route path='/info' element={<div>Hello I`m Info</div>} />
    </Routes>
  </BrowserRouter>
);
export default App;
