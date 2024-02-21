import React from 'react';

function AdminDashboard() {
  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <div>
    
      <div>
        <label>Title</label>
        <input type="text" placeholder='AdminName'/>
        <label>Password</label> 
        <input type="text" placeholder="Password" />
      </div>
      <button>Login</button>
    </div>
    </div>
  );
}

export default AdminDashboard;
