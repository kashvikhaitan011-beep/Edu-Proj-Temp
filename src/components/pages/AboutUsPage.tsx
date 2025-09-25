import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '10,000+', label: 'Students Enrolled' },
    { icon: <BookOpen className="w-8 h-8" />, number: '150+', label: 'Courses Available' },
    { icon: <Award className="w-8 h-8" />, number: '98%', label: 'Success Rate' },
    { icon: <Target className="w-8 h-8" />, number: '5+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
            <span className="text-lg font-bold text-gray-700">SITE LOGO AND SITE NAME</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-900">
            About Us
          </h1>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Introduction */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empowering the Next Generation of Developers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to our comprehensive learning platform where innovation meets education. 
                I'm Rishika, and I'm passionate about making cutting-edge technology accessible 
                to everyone. Our mission is to bridge the gap between theoretical knowledge and 
                practical skills in the ever-evolving world of technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Our Story */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Started in 2019 with a simple vision: to democratize access to quality 
                    tech education. What began as small workshops has grown into a comprehensive 
                    platform serving thousands of students worldwide.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that everyone deserves access to the tools and knowledge needed 
                    to succeed in the digital age, regardless of their background or location.
                  </p>
                </div>
                <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500">Founder Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality Education</h4>
                  <p className="text-gray-600">
                    We provide comprehensive, up-to-date curriculum designed by industry experts.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Community First</h4>
                  <p className="text-gray-600">
                    Building a supportive community where learners help each other succeed.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Practical Focus</h4>
                  <p className="text-gray-600">
                    Emphasis on hands-on learning and real-world application of skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gray-900 text-white p-12 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students who have already transformed their careers 
                with our comprehensive courses and cutting-edge AI tools.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};