// Main.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css';

function Main() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/user');
  };

  const handleAdminLogin = () => {
    navigate('/admin');
  };

  return (
    <div className="main-container">
      <h2>Library Management</h2>
      <button onClick={handleUserLogin} className="login-button">User Login</button>
      <button onClick={handleAdminLogin} className="login-button">Admin Login</button>
    </div>
  );
}

export default Main;
