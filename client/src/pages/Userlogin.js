import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import '../styles/Userlogin.css';


function Userlogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
    navigate('/userdashboard');
  };

  return (
    <div className="user-login-container">
      <div className="login-form">
        <div className="login-header">User Login</div>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Userlogin;
