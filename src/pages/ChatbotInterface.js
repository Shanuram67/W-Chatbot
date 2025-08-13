import React, { useState, useEffect, useRef } from 'react';
import { Send, AlertCircle } from 'lucide-react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showOptions, setShowOptions] = useState(true);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      { text: "Hello! How can I assist you today?", sender: 'bot', time: new Date() },
    ]);
  }, []);



  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = { text: inputMessage, sender: 'user', time: new Date() };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      setShowOptions(true);
    }
  };

  const handleOptionClick = (option) => {
    const newMessage = { text: option, sender: 'user', time: new Date() };
    setMessages([...messages, newMessage]);
    setShowOptions(false);

    // Bot response based on the option selected
    let botResponse = '';
    switch (option) {
      case 'Any Issues':
        botResponse = "I'm sorry to hear you're having issues. Please select one of the following options:";
        break;
      case 'Share Emotion':
        botResponse = "I'm here to listen. What would you like to share about?";
        break;
    
      default:
        botResponse = "I'm here to help. What else can I do for you?";
    }

    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot', time: new Date() }]);
      setShowOptions(true);
    }, 1000);
  };

  const handleSosClick = (issue) => {
    const newMessage = { text: `SOS: ${issue}`, sender: 'user', time: new Date() };
    setMessages([...messages, newMessage]);
    setShowOptions(false);

    // Simulate an alert
    alert(`Panic Alert: ${issue}`);

    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { 
          text: `Alert received for ${issue}. Please stay safe and seek immediate help if needed. Emergency services have been notified.`, 
          sender: 'bot', 
          time: new Date() 
        }
      ]);
      setShowOptions(true);
    }, 1000);
  };

  const handleEmotionClick = (emotion) => {
    const newMessage = { text: `I want to talk about: ${emotion}`, sender: 'user', time: new Date() };
    setMessages([...messages, newMessage]);
    setShowOptions(false);

    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { 
          text: `I understand you want to discuss ${emotion}. It's important to express your feelings. Can you tell me more about what's on your mind regarding ${emotion}?`, 
          sender: 'bot', 
          time: new Date() 
        }
      ]);
      setShowOptions(true);
    }, 1000);
  };

  const renderOptions = () => {
    if (messages.length === 0) return null;
    
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.sender === 'bot' && showOptions) {
      switch (lastMessage.text) {
        case "I'm sorry to hear you're having issues. Please select one of the following options:":
          return (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button onClick={() => handleSosClick('Feeling unsafe in current location')} className="btn btn-error btn-sm">Feeling unsafe</button>
              <button onClick={() => handleSosClick('Being followed')} className="btn btn-error btn-sm">Being followed</button>
              <button onClick={() => handleSosClick('Domestic violence')} className="btn btn-error btn-sm">Domestic violence</button>
              <button onClick={() => handleSosClick('Harassment')} className="btn btn-error btn-sm">Harassment</button>
              <button onClick={() => handleSosClick('Medical emergency')} className="btn btn-error btn-sm">Medical emergency</button>
              <button onClick={() => handleSosClick('Witnessing a crime')} className="btn btn-error btn-sm">Witnessing a crime</button>
            </div>
          );
        case "I'm here to listen. What would you like to share about?":
          return (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button onClick={() => handleEmotionClick('Mental Health')} className="btn btn-primary btn-sm">Mental Health</button>
              <button onClick={() => handleEmotionClick('Relationships')} className="btn btn-primary btn-sm">Relationships</button>
              <button onClick={() => handleEmotionClick('Motherhood')} className="btn btn-primary btn-sm">Motherhood</button>
              <button onClick={() => handleEmotionClick('Happiness')} className="btn btn-primary btn-sm">Happiness</button>
              <button onClick={() => handleEmotionClick('Stress & Anxiety')} className="btn btn-primary btn-sm">Stress & Anxiety</button>
              <button onClick={() => handleEmotionClick('Anger')} className="btn btn-primary btn-sm">Anger</button>
              <button onClick={() => handleEmotionClick('Advice')} className="btn btn-primary btn-sm">Advice</button>
            </div>
          );
        default:
          return (
            <div className="flex justify-center gap-2 mt-4">
              <button onClick={() => handleOptionClick('Any Issues')} className="btn btn-primary btn-sm">Any Issues</button>
              <button onClick={() => handleOptionClick('Share Emotion')} className="btn btn-secondary btn-sm">Share Emotion</button>
              
            </div>
          );
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col h-[500px] bg-gradient-to-br from-blue-500 to-green-500 rounded-lg shadow-xl overflow-hidden">
      <h1 className="text-2xl font-bold text-white mb-4">ChatBot Assistant</h1>
      <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`chat ${message.sender === 'bot' ? 'chat-start' : 'chat-end'}`}>
              <div className={`chat-bubble ${message.sender === 'bot' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                {message.text}
                <div className="text-xs opacity-50 mt-1">
                  {message.time.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {renderOptions()}
          <div ref={chatEndRef} />
        </div>
        <div className="p-4 bg-gray-100">
          <div className="flex items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white rounded-r-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;