import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import Header from './components/Header';

const App = () =>
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state);
  // console.log(store);
  (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<PostsPage />} />
          <Route path='/user' element={<div>Hello I`m User</div>} />
          <Route path='/info' element={<div>Hello I`m Info</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
export default App;
