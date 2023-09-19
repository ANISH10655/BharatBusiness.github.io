import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Hiw from './pages/Hiw'
import Help from './pages/Help'
import Services from './pages/Services'
import Signupc from './pages/Signupc'
import Signupv from './pages/Signupv'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Webservices from './pages/Webservices'
import Servicetalk from './pages/Servicetalk'
import Investors from './pages/Investors'
import Chatbot from './pages/Chatbot'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<Hiw />} />
        <Route path="/help" element={<Help />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signupvolunteer" element={<Signupv />} />
        <Route path="/signupcompany" element={<Signupc />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/webservices" element={<Webservices />} />
        <Route path="/techservices" element={<Servicetalk />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App
