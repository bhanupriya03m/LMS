import React from 'react';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/admindashboard');
  };

  return (
    <div>
      <div>Adminlogin</div>
      <div>
        <label>AdminName</label>
        <input type="text" placeholder='AdminName'/>
        <label>Password</label> 
        <input type="text" placeholder="Password" />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Adminlogin;

