import React from 'react';
import { Cpu, FileText, Image, MessageSquare } from 'lucide-react';

export const AIHubPage: React.FC = () => {
  const aiTools = [
    {
      id: 1,
      name: 'Code Assistant',
      description: 'AI-powered coding help and debugging',
      icon: <Cpu className="w-12 h-12" />,
      color: 'bg-green-200',
    },
    {
      id: 2,
      name: 'Essay Writer',
      description: 'Generate and improve written content',
      icon: <FileText className="w-12 h-12" />,
      color: 'bg-yellow-200',
    },
    {
      id: 3,
      name: 'Image Generator',
      description: 'Create images from text descriptions',
      icon: <Image className="w-12 h-12" />,
      color: 'bg-pink-200',
    },
    {
      id: 4,
      name: 'Chat Assistant',
      description: 'Conversational AI for learning support',
      icon: <MessageSquare className="w-12 h-12" />,
      color: 'bg-orange-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
            <span className="text-lg font-bold text-gray-700">SITE LOGO AND SITE NAME</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          AI Hub
        </h1>

        {/* AI Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {aiTools.map((tool) => (
            <div
              key={tool.id}
              className={`${tool.color} p-8 rounded-3xl hover:shadow-lg transition-shadow cursor-pointer group`}
            >
              <div className="text-center">
                <div className="text-gray-700 mb-6 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{tool.description}</p>
              </div>
              
              <div className="mt-8">
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-semibold transition-colors">
                  Launch Tool
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Unlock Your Potential with AI-Powered Learning
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our AI Hub provides cutting-edge tools to enhance your learning experience. 
              From code assistance to content creation, these tools are designed to boost 
              your productivity and help you master new skills faster than ever before.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                24/7 Available
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
                Free for Students
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm">
                Regular Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};