import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<PostsPage />} />
      <Route path='/user/:id' element={<div>Hello I`m User</div>} />
      <Route path='/info' element={<div>Hello I`m Info</div>} />
    </Routes>
  </BrowserRouter>
);
export default App;
