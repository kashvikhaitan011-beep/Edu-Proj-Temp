// AboutSlides.tsx
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface AboutSlidesProps {
  onLogin: () => void;
}

export const AboutSlides: React.FC<AboutSlidesProps> = ({ onLogin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi! I am Rishika!";

  // Typing animation effect
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentSlide === 0 && typedText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    }
    return () => clearTimeout(timeoutId);
  }, [typedText, currentSlide, fullText]);

  // Reset typing animation when returning to first slide
  useEffect(() => {
    if (currentSlide === 0) {
      setTypedText('');
    }
  }, [currentSlide]);

  const testimonials = [
    "Amazing courses that helped me land my dream job!",
    "The AI tools are incredibly helpful for learning.",
    "Rishika's teaching style is exceptional and engaging.",
    "Best investment I made for my career development."
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const faqs = [
    "How do I get started with the courses?",
    "What are the prerequisites for AI courses?",
    "Can I access courses offline?",
    "Do you offer one-on-one mentoring?",
    "What's included in the AI Hub?",
    "How often are live classes conducted?",
    "Can I get a refund if I'm not satisfied?",
    "Do you provide certificates upon completion?"
  ];

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {/* Slide 1: Hero/About (portrait video on left for md+) */}
      <div className="h-screen flex items-center justify-center bg-gray-50 snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-12">
            {/* Left: portrait video placeholder (phone-like on md+) */}
            <div className="w-full md:flex-none md:w-[360px] md:h-[640px]">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl h-64 md:h-full w-full flex items-center justify-center mx-auto">
                <div className="text-center text-gray-600">
                  <Play className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-sm">Video with diff<br />thumbnail<br />in<br />portrait<br />design</p>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 min-h-[2.5rem]">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>

              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={onLogin}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={onLogin}
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-medium transition-colors"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Services (full-bleed) */}
      <div className="h-screen flex items-center justify-center bg-white snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">SITE LOGO AND SITE NAME</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What we have got to offer?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4 md:px-0">
            <div className="bg-blue-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
              </p>
            </div>
            <div className="bg-yellow-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Providing for live one to one or all 3 group classes, tailored according to your needs.
              </p>
            </div>
            <div className="bg-green-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.Gain access to cutting edge AI tools, to max your exams and boost your productivity.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
              </p>
            </div>
            <div className="bg-pink-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Get access to all PYQs and cheatsheets related to your field.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
              Join us now!
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3: Testimonials (full-bleed) */}
      <div className="h-screen flex items-center justify-center bg-gray-50 snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">SITE LOGO AND SITE NAME</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What do students say about us?
          </h2>

          <div className="bg-yellow-200 p-16 rounded-2xl mb-12 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 transition-opacity duration-500">
                "{testimonials[currentTestimonial]}"
              </p>
              <p className="text-gray-600 uppercase tracking-wide text-sm">
                Automatic slide show of testimonials of students
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
              Join us now!
            </button>
          </div>
        </div>
      </div>

      {/* Slide 4: FAQ (full-bleed) */}
      <div className="h-screen flex items-center justify-center bg-white snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 h-full items-center">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                FREQUENTLY<br />
                ASKED<br />
                QUESTIONS
              </h2>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Join Now
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">LIST OF QUESTIONS</h3>
              {faqs.map((faq, index) => (
                <div key={index} className="py-4 px-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <p className="text-gray-800">{faq}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
