// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomePage1 from './pages/HomePage1';
import SOSPage from './pages/SOSPage';
import PanicPage from './pages/PanicButtonPage';
import SafetyGuidancePage from './pages/SafetyGuidancePage';
import LocationShare from './pages/LocationEnablePage';
import Chatbot from './pages/ChatbotInterface';
import SafeAreaAnalysis from './pages/SafeAreaAnalysis';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Help from './pages/Help';
import Feedback from './pages/Feedback';


 // Import the new page

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        
        <Route path="/home1" element={<HomePage1 />} /> {/* Add the new route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sos" element={<SOSPage />} />
        <Route path="/location" element={<LocationShare />} />
        <Route path="/panic" element={<PanicPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/area" element={<SafeAreaAnalysis />} />
        <Route path="/other" element={<SafetyGuidancePage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/feedback" element={<Feedback />} />
       
      </Routes>
      
      <Footer />
    </Router>
   
  );
}

export default App;
