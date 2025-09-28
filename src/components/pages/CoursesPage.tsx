import React from 'react';
import { Star, Clock, Users, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const courses = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Advanced ${['Web Development', 'AI Programming', 'Data Science', 'Mobile App', 'Cloud Computing'][i % 5]}`,
    description: 'Master cutting-edge technologies with hands-on projects and real-world applications.',
    level: ['Beginner', 'Intermediate', 'Advanced'][i % 3],
    duration: `${Math.floor(Math.random() * 20) + 10} hours`,
    students: Math.floor(Math.random() * 1000) + 100,
    rating: (Math.random() * 1 + 4).toFixed(1),
    image: `course-${(i % 6) + 1}`
  }));

  const [currentPage, setCurrentPage] = React.useState(0);
  const coursesPerPage = 6;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const getCurrentCourses = () => {
    const start = currentPage * coursesPerPage;
    return courses.slice(start, start + coursesPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return '#ffffffff';
      case 'Intermediate': return '#ffffffff';
      case 'Advanced': return '#ffffffff';
      default: return '#ffffffff';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-6 pt-36 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed for the next generation of developers. Master in-demand skills with expert-led courses.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: '#a5d8ff' }}>
            <div className="text-2xl font-bold text-gray-900">{courses.length}+</div>
            <div className="text-sm text-gray-700">Courses Available</div>
          </div>
          <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: '#ffec99' }}>
            <div className="text-2xl font-bold text-gray-900">10K+</div>
            <div className="text-sm text-gray-700">Students Enrolled</div>
          </div>
          <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: '#ffc9c9' }}>
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <div className="text-sm text-gray-700">Average Rating</div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="rounded-3xl p-8 mb-8 border-4 border-white shadow-lg" style={{ backgroundColor: '#fff4e6' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentCourses().map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl p-4 shadow-lg border-2 border-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                {/* Course Image */}
                <div 
                  className="relative h-40 rounded-xl mb-4 overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: getLevelColor(course.level) }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div 
                    className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold"
                    style={{ 
                      backgroundColor: getLevelColor(course.level),
                      color: '#1e1e1e'
                    }}
                  >
                    {course.level}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-2">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                  
                  {/* Course Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(parseFloat(course.rating)) ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{course.rating}</span>
                    </div>
                    <button 
                      className="px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105"
                      style={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: '#a5d8ff' }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-8 h-8 rounded-lg font-semibold transition-all duration-200 hover:scale-110 ${
                  currentPage === index 
                    ? 'text-white scale-110 shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{ 
                  backgroundColor: currentPage === index ? '#ff8787' : 'transparent'
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: '#a5d8ff' }}
          >
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Page Info */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {totalPages} • Showing {getCurrentCourses().length} of {courses.length} courses
          </span>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Ready to Start Learning?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students who have transformed their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#1e1e1e', color: '#ffffff' }}
              >
                Browse All Courses
              </button>
              <button 
                className="px-8 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ borderColor: '#1e1e1e', color: '#1e1e1e', backgroundColor: 'transparent' }}
              >
                Contact Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};