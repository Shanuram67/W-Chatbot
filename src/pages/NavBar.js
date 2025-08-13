import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather'; // Assuming you're using react-icons or react-feather for icons
import './NavBar.css'; // Make sure you import the CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(''); // Corrected useState declaration

  useEffect(() => {
    // Retrieve username from sessionStorage
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
       setUsername(storedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (route) => {
    window.location.href = route;
  };

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-blue-500">
      <div className="text-white text-xl font-semibold">
        Welcome {username ? username : 'Guest'}
      </div>
      <div className="md:hidden">
        {/* Toggle Menu Button for Mobile and Tablets */}
        {isMenuOpen ? (
          <X className="text-white cursor-pointer" onClick={toggleMenu} />
        ) : (
          <Menu className="text-white cursor-pointer" onClick={toggleMenu} />
        )}
      </div>
      {/* Menu for Larger Screens */}
      <div className="hidden md:flex space-x-4">
        <button className="text-white" onClick={() => navigateTo('/login')}>Login</button>
        <button className="text-white" onClick={() => navigateTo('/signup')}>SignUp</button>
        <button className="text-white" onClick={() => navigateTo('/help')}>Help</button>
        <button className="text-white" onClick={() => navigateTo('/feedback')}>Feedback</button>
      </div>

      {/* Mobile Menu when opened */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-2">
          <button className="text-white" onClick={() => navigateTo('/login')}>Login</button>
          <button className="text-white" onClick={() => navigateTo('/signup')}>SignUp</button>
          <button className="text-white" onClick={() => navigateTo('/help')}>Help</button>
          <button className="text-white" onClick={() => navigateTo('/feedback')}>Feedback</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
