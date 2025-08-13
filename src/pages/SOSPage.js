import React, { useState, useEffect } from 'react';



const SOSPage = () => {
  const [animationFrame, setAnimationFrame] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const emergencyContacts = [
    { title: "Police", number: "100" },
    { title: "Women Helpline", number: "1091" },
    { title: "Ambulance", number: "102" },
    { title: "Domestic Abuse Helpline", number: "181" },
  ];

  const handleSOSClick = async () => {
   

    try {
      const response = await fetch('/api/sos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'SOS button clicked' }),
      });

      if (!response.ok) {
        throw new Error('Failed to send SOS message');
      }
    } catch (error) {
      console.error('Error sending SOS message:', error);
    
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 bg-gradient-to-b from-red-600 to-red-950">
     

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Emergency Help Needed?
        </h1>
        
        <button 
          onClick={handleSOSClick}
          className="block mx-auto mb-12 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-3xl md:text-4xl lg:text-5xl animate-pulse"
        >
          {`${'('.repeat(animationFrame)} SOS ${')'.repeat(animationFrame)}`}
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">{contact.title}</h2>
              <p className="text-3xl font-bold text-blue-600">{contact.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SOSPage;