// AboutUsPage.tsx
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
    <div className="relative w-full">
      {/* Header / Hero - full-bleed */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-6 md:px-8 lg:px-12">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-900 rounded-full" />
            <span className="text-lg font-bold text-gray-700">SITE LOGO AND SITE NAME</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 leading-tight">
            Hi! I am Rishika!
          </h1>

          <div className="mt-8 w-full max-w-none text-center px-3 md:px-20">
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
              Welcome to our comprehensive learning platform where innovation meets education.
              I'm passionate about making cutting-edge technology accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Split layout: video (portrait left) + about box (right) - full-bleed */}
      <section className="min-h-screen w-full bg-gray-50 flex items-center px-6 md:px-8 lg:px-12">
        <div className="w-full flex flex-col md:flex-row gap-10 items-start">
          {/* Left: portrait video placeholder (phone-like on md+) */}
          <div className="w-full md:flex-none md:w-[360px] md:h-[640px]">
            <div className="h-64 md:h-full w-full rounded-2xl border border-gray-200 bg-white flex items-center justify-center mx-auto">
              <div className="text-center text-gray-500">
                <div className="text-6xl">▶</div>
                <div className="mt-4">Video with diff thumbnail in portrait design</div>
              </div>
            </div>
          </div>

          {/* Right: About box visually emphasized but full-bleed on its column */}
          <div className="flex-1">
            <div className="h-full w-full bg-[#0f1724] text-white rounded-2xl p-10 shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">About Me</h3>
              <p className="text-lg leading-relaxed text-gray-200 mb-8">
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
                Welcome to my learning platform! I'm passionate about helping students master cutting-edge technologies and AI tools.
                Join thousands of learners who have transformed their careers with our comprehensive courses.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold"
                >
                  Login
                </button>

                <button className="px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - full-bleed */}
      <section className="min-h-screen w-full bg-white flex items-center px-6 md:px-8 lg:px-12">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto flex items-center justify-center mb-4">
                <div className="text-blue-600">{stat.icon}</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
              <div className="text-lg text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story - full-bleed */}
      <section className="min-h-screen w-full bg-gray-50 flex items-center px-6 md:px-8 lg:px-12">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 mb-4">
              Started in 2019 with a simple vision: to democratize access to quality tech education. What began as small workshops has grown into a comprehensive platform serving thousands worldwide.
            </p>
            <p className="text-lg text-gray-700">
              We believe everyone deserves access to the tools and knowledge needed to succeed in the digital age.
            </p>
          </div>
          <div className="h-80 md:h-96 rounded-2xl bg-gray-200 flex items-center justify-center">
            Founder Image Placeholder
          </div>
        </div>
      </section>

      {/* Values - full-bleed */}
      <section className="min-h-screen w-full bg-white flex items-center px-6 md:px-8 lg:px-12">
        <div className="w-full">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-10 px-4 md:px-0">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                <BookOpen className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Quality Education</h4>
              <p className="text-lg text-gray-700">Comprehensive, up-to-date curriculum designed by industry experts.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-purple-100 mx-auto flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Community First</h4>
              <p className="text-lg text-gray-700">Building a supportive community where learners help each other succeed.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-yellow-100 mx-auto flex items-center justify-center mb-4">
                <Target className="w-10 h-10 text-yellow-600" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Practical Focus</h4>
              <p className="text-lg text-gray-700">Emphasis on hands-on learning and real-world application of skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - full-bleed */}
      <section className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center px-6 md:px-8 lg:px-12">
        <div className="text-center w-full max-w-none px-4 md:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join thousands of students who have already transformed their careers with our comprehensive courses and cutting-edge AI tools.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-semibold">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};
