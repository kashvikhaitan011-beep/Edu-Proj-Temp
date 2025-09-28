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

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#e9ecef] text-[#1e1e1e]">
      <div className="container mx-auto px-6 pt-28 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e]">
            Live Classes
          </h1>
          <p className="text-[#495057] mt-2 text-lg">
            Stay updated with schedules, announcements & requests
          </p>
        </div>

        {/* Upcoming Class */}
        <div className="bg-[#a5d8ff] p-8 rounded-3xl mb-14 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Upcoming Class</h2>
            <button className="bg-[#ff8787] hover:bg-[#ffc9c9] text-white px-6 py-2 rounded-xl font-semibold shadow-md transition">
              Join Now
            </button>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1e1e1e]">
              Countdown to Start
            </h3>
            <div className="flex justify-center gap-6">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fff4e6] rounded-xl px-5 py-4 shadow-md"
                >
                  <div className="text-3xl font-bold text-[#1e1e1e]">
                    {item.value}
                  </div>
                  <div className="text-sm text-[#495057]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="bg-[#ffffff] p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#ff8787]" />
              Calendar
            </h3>
            <p className="text-sm text-[#495057] mb-4">
              Click a date to see deadlines & to-dos
            </p>
            <div className="bg-[#f8f9fa] p-4 rounded-xl border border-[#e9ecef]">
              <div className="grid grid-cols-7 gap-2 text-xs text-center font-semibold">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="p-2 text-[#1e1e1e]">{day}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg hover:bg-[#ffd8a8] cursor-pointer"
                  >
                    {i < 30 ? i + 1 : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reschedule Request */}
          <div className="bg-[#fff4e6] p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">
              Request Reschedule
            </h3>
            <textarea
              className="w-full p-3 border border-[#e9ecef] rounded-lg mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#a5d8ff]"
              rows={4}
              placeholder="Provide reason for rescheduling..."
            />
            <button className="bg-[#a5d8ff] hover:bg-[#ffec99] text-[#1e1e1e] font-semibold px-6 py-2 rounded-xl w-full transition">
              Submit Request
            </button>
          </div>

          {/* Announcements */}
          <div className="bg-[#ffc9c9] p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">
              Announcements
            </h3>
            <div className="space-y-3">
              {[
                { title: 'Next class: Advanced React Patterns', time: 'Tomorrow at 3:00 PM' },
                { title: 'Assignment deadline reminder', time: 'Due in 3 days' },
                { title: 'New course materials uploaded', time: 'Check your dashboard' },
              ].map((note, i) => (
                <div
                  key={i}
                  className="bg-[#ffffff] p-3 rounded-xl shadow-sm border border-[#e9ecef]"
                >
                  <p className="text-sm font-medium">{note.title}</p>
                  <p className="text-xs text-[#495057]">{note.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
