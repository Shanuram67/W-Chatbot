import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './NavBar';

const safetyTips = [
  {
    title: "Be mindful of your surroundings",
    description: "Always be aware of your environment, whether you're walking, driving, or using public transportation.",
    icon: "👀"
  },
  {
    title: "Plan ahead",
    description: "Before heading out, especially if you're alone, make a plan and inform someone of your whereabouts.",
    icon: "📅"
  },
  {
    title: "Trust your gut",
    description: "If something or someone makes you feel uncomfortable, don't hesitate to leave or avoid the situation.",
    icon: "🦋"
  },
  {
    title: "Stick to well-lit areas",
    description: "Avoid deserted or dimly lit areas, especially at night.",
    icon: "💡"
  },
  {
    title: "Protect your personal information",
    description: "If you live alone, consider limiting the personal information you share online or on your phone.",
    icon: "🔒"
  },
  {
    title: "Secure your home",
    description: "Change the locks when you move in and keep your doors and windows locked.",
    icon: "🏠"
  },
  {
    title: "Be proactive",
    description: "Regularly check for potential security issues around your home, such as broken windows or malfunctioning lights, and report them to the appropriate authorities.",
    icon: "🔍"
  },
  {
    title: "Learn self-defense",
    description: "Consider taking a self-defense class to equip yourself with practical skills to protect yourself.",
    icon: "🥋"
  },
  {
    title: "Buddy up",
    description: "Whenever possible, shop or walk with a friend or family member.",
    icon: "👭"
  },
  {
    title: "Be cautious online",
    description: "Be mindful of what you share on social media and avoid oversharing personal information.",
    icon: "💻"
  }
];

const SafetyGuidancePage = () => {
  return (
   
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100  ">
       <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Stay Safe and Secure
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyTips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h2>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyGuidancePage;