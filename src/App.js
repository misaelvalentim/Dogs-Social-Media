import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Api from './Api/Api';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './Context/UserContext';
import User from './Components/User/User';
import UserProfile from './Components/User/UserProfile';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Api /> */}
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route path='account/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
              <Route path='foto/:id' element={<Photo />} />
              <Route path='perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
