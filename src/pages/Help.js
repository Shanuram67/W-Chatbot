import React from 'react';
import Navbar from './NavBar';

const Help = () => {
  const faqs = [
    { question: "How does this chatbot help?", answer: "This chatbot assists women in emergencies with useful information and resources." },
    { question: "Is this chatbot available 24/7?", answer: "Yes, it's available at all times." },
    { question: "Can I share my location through this platform?", answer: "Yes, you can share your location to get immediate assistance." },
    { question: "What kind of emergencies does it cover?", answer: "It covers domestic violence, sexual assault, legal assistance, and more." },
    { question: "Is my data safe?", answer: "Yes, your data is securely managed and protected." },
    { question: "How to report an issue with the chatbot?", answer: "You can provide feedback via the Feedback page." },
    { question: "Does this chatbot offer legal advice?", answer: "It provides basic legal information and directs you to professional help." },
    { question: "Can I access this on mobile?", answer: "Yes, this chatbot is fully optimized for mobile use." },
    { question: "How can I speak to a live person?", answer: "For immediate help, please call the emergency services directly." },
    { question: "Does it offer mental health support?", answer: "Yes, the chatbot provides information and contacts for mental health support services." },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar as a fixed header */}
      <Navbar />
      
      {/* Main container with padding to avoid overlapping with fixed header */}
      <div className="pt-20 bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Help & FAQs</h2>
        
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Help;
