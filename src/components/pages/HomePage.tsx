import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  X,
  TrendingUp,
  Calendar,
  Clock,
  BookOpen,
  Target,
  Award,
  Users,
  Play,
  Star,
  ArrowRight,
  Activity,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [userName] = useState('User Name');
  const [jiggle, setJiggle] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setJiggle(true);
      setTimeout(() => setJiggle(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const todoItems = [
    { task: 'Complete React Module 3', completed: false },
    { task: 'Submit AI Project Proposal', completed: false },
    { task: 'Join Live Class Tomorrow', completed: false },
    { task: 'Review Course Materials', completed: true },
  ];

  const quickStats = [
    { label: 'Courses Completed', value: '12', icon: <Award className="w-6 h-6" />, color: 'bg-yellow-400' },
    { label: 'Current Streak', value: '15 days', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-orange-400' },
    { label: 'Study Hours', value: '45h', icon: <Clock className="w-6 h-6" />, color: 'bg-blue-400' },
    { label: 'Certificates', value: '8', icon: <Star className="w-6 h-6" />, color: 'bg-purple-400' },
  ];

  const recentActivities = [
    { title: 'Completed JavaScript Basics', time: '2 hours ago', type: 'course' },
    { title: 'Joined AI Study Group', time: '1 day ago', type: 'community' },
  ];

  const upcomingEvents = [
    { title: 'React Advanced Concepts', date: 'Tomorrow', time: '10:00 AM', type: 'Live Class' },
    { title: 'AI Project Presentation', date: 'Dec 15', time: '2:00 PM', type: 'Assignment' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'community':
        return <Users className="w-4 h-4 text-green-600" />;
      case 'assignment':
        return <Target className="w-4 h-4 text-red-600" />;
      case 'session':
        return <Play className="w-4 h-4 text-purple-600" />;
      case 'achievement':
        return <Award className="w-4 h-4 text-yellow-600" />;
      default:
        return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Live Class':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Assignment':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Community':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Workshop':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-28"></div>

      <div className="container mx-auto px-6 py-10">
        {/* Greeting */}
        <div className="text-center py-10 bg-yellow-50 rounded-xl shadow mb-8">
          <h1
            className={`text-2xl font-bold mb-4 transition-transform ${jiggle ? 'animate-bounce' : ''}`}
          >
            Hi {userName}! What are you upto today?
          </h1>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow transition">
            Take A Tour
          </button>
        </div>

        {/* Announcements */}
        <div className="bg-pink-200 text-center py-16 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-bold">Announcements</h2>
        </div>

        {/* Dashboard + To-Do */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-200 p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p className="text-sm text-gray-700">
              Includes graphs, details about study time, upcoming classes, etc.
            </p>
          </div>
          <div className="bg-green-200 p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-4">To Do List</h2>
            <div className="space-y-3">
              {todoItems.map((item, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <input type="checkbox" defaultChecked={item.completed} className="mr-3" />
                  <span className={`${item.completed ? 'line-through text-gray-500' : ''}`}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 p-6 rounded-2xl shadow-lg border hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.color} p-3 rounded-xl text-white`}>{stat.icon}</div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-bold text-black mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity + Events */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-200 p-8 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="mr-2" /> Recent Activity
            </h2>
            <div className="space-y-3">
              {recentActivities.map((a, i) => (
                <div key={i} className="bg-white p-3 rounded-lg flex items-start shadow-sm">
                  <div className="mr-3">{getActivityIcon(a.type)}</div>
                  <div>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-gray-500">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-200 p-8 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Calendar className="mr-2" /> Upcoming Events
            </h2>
            <div className="space-y-3">
              {upcomingEvents.map((e, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <p className="font-medium">{e.title}</p>
                    <span className={`px-2 py-1 text-xs rounded-full border ${getEventColor(e.type)}`}>
                      {e.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {e.date} at {e.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement */}
        <div className="bg-gradient-to-r from-yellow-300 to-orange-300 p-6 rounded-xl text-center mb-8 shadow">
          <h2 className="text-xl font-bold flex justify-center items-center mb-2">
            <Award className="mr-2" /> Latest Achievement
          </h2>
          <p>Congratulations! You've earned the "Consistent Learner" badge! 🎉</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 p-8 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-500 text-white p-4 rounded-lg shadow hover:scale-105 transition">
              Start Learning
            </button>
            <button className="bg-green-500 text-white p-4 rounded-lg shadow hover:scale-105 transition">
              Join Group
            </button>
            <button className="bg-purple-500 text-white p-4 rounded-lg shadow hover:scale-105 transition">
              Track Progress
            </button>
            <button className="bg-red-500 text-white p-4 rounded-lg shadow hover:scale-105 transition">
              Notifications
            </button>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-8 right-8 z-40">
        {!isChatbotOpen ? (
          <button
            onClick={() => setIsChatbotOpen(true)}
            className="bg-white p-4 border shadow-xl rotate-45"
            style={{ width: '60px', height: '60px', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          >
            <div className="-rotate-45 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
          </button>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-2xl w-80 border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Chat Bot</h3>
              <button onClick={() => setIsChatbotOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2 mb-4">
              <div className="bg-blue-50 p-3 rounded">Hello! How can I help you?</div>
              <div className="bg-green-50 p-3 rounded ml-6">Hi! I need help with my courses.</div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type message..."
                className="flex-1 border p-2 rounded mr-2"
              />
              <button className="bg-blue-500 text-white p-2 rounded">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
