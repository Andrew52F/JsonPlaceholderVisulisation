import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import Header from './features/Header';
import UserInfoPage from './pages/UserInfoPage';
import AboutMePage from './pages/AboutMePage';

const App:React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<PostsPage />} />
      <Route path='/user/:userId' element={<UserInfoPage />} />
      <Route path='/about-me' element={<AboutMePage />} />
    </Routes>
  </BrowserRouter>
);
export default App;
