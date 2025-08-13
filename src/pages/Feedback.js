import React, { useState } from 'react';
import Navbar from './NavBar';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Feedback for Women's Emergency Response Chatbot";
    const mailtoLink = `mailto:wrccontact998@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(feedback)}`;
    
    // Open the user's default email client with the prefilled content
    window.location.href = mailtoLink;

    // Clear the feedback field after opening the email client
    setFeedback('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Feedback section */}
      <div className="pt-20 pb-20">
        <div className="feedback bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Feedback</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-block btn-primary">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
