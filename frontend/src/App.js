import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Forum from './components/Forum';
import Quiz from './components/Quiz';
import PathFinder from './components/PathFinder';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  // Track login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login success (set in login component)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout (could be used in the header or other places)
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Only show Header if the user is logged in */}
        {isLoggedIn && <Header onLogout={handleLogout} />} 
        
        <Routes>
          {/* Set Login as the default page and pass handleLogin function */}
          <Route path="/" element={<Login onLogin={handleLogin} />} />

          {/* Add Signup page route */}
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes (redirect to login if not logged in) */}
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/forum" element={isLoggedIn ? <Forum /> : <Navigate to="/" />} />
          <Route path="/quiz" element={isLoggedIn ? <Quiz /> : <Navigate to="/" />} />
          <Route path="/pathfinder" element={isLoggedIn ? <PathFinder /> : <Navigate to="/" />} />
        </Routes>

        {/* Footer is optional; it could also be hidden based on login state */}
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
