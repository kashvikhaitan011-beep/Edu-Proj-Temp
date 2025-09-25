import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'live-classes', label: 'Live Classes' },
    { id: 'ai-hub', label: 'AI Hub' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'about', label: 'About Us' },
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-6 left-6 right-6 z-50 hidden md:block">
        <div className="flex items-center justify-between">
          {/* Site Logo and Name - Left Side */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 text-lg font-bold">SITE LOGO AND SITE NAME</span>
          </div>

          {/* Navigation Pills - Right Side */}
          <nav className="bg-gray-900 rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`px-4 py-2 text-sm font-bold rounded-full transition-colors ${
                    currentPage === item.id
                      ? 'bg-white text-gray-900'
                      : 'text-white hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={onLogout}
                className="px-4 py-2 text-sm font-bold text-white hover:bg-gray-700 rounded-full transition-colors"
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-gray-900 px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-white text-sm font-bold">SITE LOGO AND SITE NAME</span>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="bg-gray-900 px-4 py-4 shadow-lg">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-white text-gray-900'
                      : 'text-white hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={onLogout}
                className="block w-full text-left px-4 py-3 text-sm font-bold text-white hover:bg-gray-700 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for mobile navigation */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};