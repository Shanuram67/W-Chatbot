import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  
  // State to manage the checkbox and form submission
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handle Signup button click
  const handleSignup = () => {
    if (isChecked) {
      // Show success toast message
      toast.success('Successfully signed up!');
      navigate('/login'); // Navigate to login page
    } else {
      toast.error('Please accept the terms and conditions to sign up.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Signup Form</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" placeholder="Email Address" className="input input-bordered w-full" />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered w-full" />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" />
        </div>

        {/* Terms and Conditions */}
        <div className="form-control mb-4">
          <label className="cursor-pointer flex items-center">
            <input
              type="checkbox"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="label-text ml-2">
              I agree to the <Link to="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
            </span>
          </label>
        </div>

        {/* Signup Button */}
        <button
          className={`btn btn-primary w-full ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSignup}
          disabled={!isChecked} // Disable button if terms are not accepted
        >
          Signup
        </button>

        <div className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </div>
      </div>

      {/* Toastify Container for showing messages */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
