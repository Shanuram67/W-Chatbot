import React, {  } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocationShare from './LocationEnablePage';
import ChatbotInterface from './ChatbotInterface';
import Navbar from './NavBar';

const HomePage1 = () => {
  const handleButtonClick = (buttonName) => {
    if (buttonName === 'SOS') {
      toast.error('Alerted. Our Defense team coming to assist you', {
        position: 'bottom-center',
        autoClose: 3000,
      });
    } else if (buttonName === 'Panic Button') {
      toast.info('You are being monitored by our defense team, stay safe', {
        position: 'bottom-center',
        autoClose: 3000,
      });
    }
  };
  const navigateTo = (route) => {
    window.location.href = route;
  };

return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Mobile/Tablet Dropdown Menu */}
    
      {/* Buttons Section */}
      <div className="flex justify-center items-center mt-4 w-full px-5">
  <div className="grid grid-cols-2 gap-4 w-full max-w-5xl md:flex md:space-x-4">
    <button
      className="bg-red-500 flex-1 h-22 text-white font-bold rounded-md flex justify-center items-center p-4"
      onClick={() => handleButtonClick('SOS')}
    >
      <img 
        src="/assets/sos.png" 
        alt="SOS Icon" 
        className="w-6 h-6 md:w-8 md:h-8 mr-2" 
      />
      SOS
    </button>
    
    <button
      className="bg-blue-500 flex-1 h-22 text-white font-bold rounded-md flex justify-center items-center p-4"
      onClick={() => handleButtonClick('Panic Button')}
    >
      <img 
        src="/assets/pb.png" 
        alt="Panic Button Icon" 
        className="w-6 h-6 md:w-8 md:h-8 mr-2" 
      />
      Panic Button
    </button>

    <button
      className="bg-red-500 flex-1 h-13 text-white font-bold rounded-md flex justify-center items-center p-4"
      onClick={() => navigateTo('/area')}
    >
      <img 
        src="/assets/ad.png" 
        alt="Area Detection Icon" 
        className="w-6 h-6 md:w-8 md:h-8 mr-2" 
      />
      Area Detection
    </button>

    <button
      className="bg-blue-500 flex-1 h-16 text-white font-bold rounded-md flex justify-center items-center p-4"
      onClick={() => navigateTo('/other')}
    >
      <img 
        src="/assets/ot.png" 
        alt="Precautions Icon" 
        className="w-6 h-6 md:w-8 md:h-8 mr-2" 
      />
      Precautions
    </button>
  </div>
</div>


      {/* Main Section with Chatbot (Left) and LocationEnablePage (Right) */}
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full px-5 mt-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 bg-white rounded-md shadow-md p-4 border border-gray-300">
          {/* Left Side: Chatbot Interface */}
          <ChatbotInterface />
        </div>

        <div className="flex-1 bg-blue-800 rounded-md shadow-md p-4 border border-gray-300">
          {/* Right Side: Location Enable Page */}
          <LocationShare />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default HomePage1;
