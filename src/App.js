import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return ( <>
    <Routes>

      <Route path='/' element={<>
        <Header />
        <Home />
      </>} />
      <Route path='/login' element={<>
        <Header />
        <Login />
      </>} />
      
      <Route path='/register' element={<>
        <Header />
        <Register />
      </>} />

     








    </Routes>








  </>
);
}

export default App;