import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export const LiveClassesPage: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prev;
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 pt-36 pb-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Live Classes
          </h1>
        </div>

        {/* Upcoming Class Details */}
        <div className="bg-blue-200 p-8 rounded-3xl mb-12 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Upcoming Class Details
            </h2>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors">
              Join Now
            </button>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">COUNTDOWN</h3>
            <div className="flex justify-center gap-8 text-center">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              CALENDAR
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              (Click a date to see deadlines & to-dos)
            </p>
            <div className="bg-white p-4 rounded-lg border">
              <div className="grid grid-cols-7 gap-1 text-xs text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="p-2 font-semibold">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-2 hover:bg-blue-100 rounded cursor-pointer"
                  >
                    {i < 30 ? i + 1 : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reschedule Request */}
          <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">
              Request Class Reschedule
            </h3>
            <textarea
              className="w-full p-3 border rounded-lg mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Please provide reason for rescheduling..."
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium w-full transition-colors">
              Submit Request
            </button>
          </div>

          {/* Announcements */}
          <div className="bg-pink-200 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Announcements</h3>
            <div className="space-y-3">
              <div className="bg-white/70 p-3 rounded-lg shadow-sm">
                <p className="text-sm font-medium">
                  Next class: Advanced React Patterns
                </p>
                <p className="text-xs text-gray-600">Tomorrow at 3:00 PM</p>
              </div>
              <div className="bg-white/70 p-3 rounded-lg shadow-sm">
                <p className="text-sm font-medium">Assignment deadline reminder</p>
                <p className="text-xs text-gray-600">Due in 3 days</p>
              </div>
              <div className="bg-white/70 p-3 rounded-lg shadow-sm">
                <p className="text-sm font-medium">
                  New course materials uploaded
                </p>
                <p className="text-xs text-gray-600">Check your dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
