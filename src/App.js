import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Saved } from './Components/Saved';
import { Subscribed } from './Components/Subscribed';
import { Home } from './Components/Home';
import { Settings } from './Components/Settings';
import  Login  from './Components/Login';
import  Coin  from './Components/Coin';
import  Footer  from './Footer'; // Importing Footer component


function App() {
  return (
    <Router>
      <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar />
          </div>
          <div className='col-4 col-md-2'></div>
          <div className='col'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/saved' element={<Saved />} />
              <Route path='/subscribed' element={<Subscribed />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
              <Route path='/coin' element={<Coin />} />
              {/* Add more Route components for other pages/components */}
            </Routes>
            <Footer /> {/* Include Footer component here */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
