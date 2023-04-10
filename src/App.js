import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Api from './Api/Api';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './Context/UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Api /> */}
        <UserStorage>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
