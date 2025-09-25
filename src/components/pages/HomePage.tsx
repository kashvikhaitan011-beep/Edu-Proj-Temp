import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [userName] = useState('User Name');
  const [jiggle, setJiggle] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Jiggle effect for greeting text
  useEffect(() => {
    const interval = setInterval(() => {
      setJiggle(true);
      setTimeout(() => setJiggle(false), 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const dashboardItems = [
    "Recent Course Progress",
    "Upcoming Assignments",
    "Latest Announcements",
    "Quick Actions"
  ];

  const todoItems = [
    "Complete React Module 3",
    "Submit AI Project Proposal",
    "Join Live Class Tomorrow",
    "Review Course Materials"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold mb-8 transition-transform ${jiggle ? 'animate-pulse' : ''}`}>
            Hi {userName}! What are you upto today?
          </h1>
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            Take A Tour
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Quick Dashboard View */}
          <div className="bg-pink-200 text-gray-900 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">QUICK DASHBOARD VIEW</h2>
            <p className="text-lg font-medium mb-8">SCROLLABLE</p>
            
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {dashboardItems.map((item, index) => (
                <div key={index} className="bg-white/50 p-4 rounded-lg">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* To-do List */}
          <div className="bg-green-200 text-gray-900 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Your to do list</h2>
            <h3 className="text-lg mb-2">and</h3>
            <p className="text-lg mb-6">upcoming tasks and notifications from Rishika</p>
            
            <div className="space-y-3">
              {todoItems.map((item, index) => (
                <div key={index} className="bg-white/50 p-3 rounded-lg flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isChatbotOpen ? (
          <button
            onClick={() => setIsChatbotOpen(true)}
            className="bg-white text-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform rotate-45"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-xl w-80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Chat bot</h3>
              <button
                onClick={() => setIsChatbotOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">Hello! How can I help you today?</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg ml-4">
                <p className="text-sm">Hi there! I need help with my courses.</p>
              </div>
            </div>
            
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-3 border rounded-lg text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};