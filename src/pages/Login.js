import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Store username in sessionStorage for access in other components
    sessionStorage.setItem('username', username);
    // Navigate to Homepage1
    navigate('/home1');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input 
            type="text" 
            placeholder="Username" 
            className="input input-bordered w-full" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="input input-bordered w-full" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered w-full" />
        </div>

        <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>

        <div className="text-center mt-4">
          Not a member? <Link to="/signup" className="text-blue-600 hover:underline">Signup now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
