import React from 'react';

export const CoursesPage: React.FC = () => {
  const courses = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Course ${i + 1}`,
    description: 'Advanced programming concepts and practical applications.',
    level: ['Beginner', 'Intermediate', 'Advanced'][i % 3],
    duration: `${Math.floor(Math.random() * 20) + 10} hours`
  }));

  const [currentPage, setCurrentPage] = React.useState(0);
  const coursesPerPage = 5;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const getCurrentCourses = () => {
    const start = currentPage * coursesPerPage;
    return courses.slice(start, start + coursesPerPage);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
            <span className="text-lg font-bold text-gray-700">SITE LOGO AND SITE NAME</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Explore our courses! Designed for the next gen developers!
        </h1>

        {/* Course Grid */}
        <div className="bg-yellow-100 p-12 rounded-3xl mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {getCurrentCourses().map((course) => (
              <div
                key={course.id}
                className="bg-yellow-200 border-2 border-gray-900 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-32 bg-yellow-300 rounded-lg mb-4"></div>
                <h3 className="font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{course.description}</p>
                <div className="text-xs text-gray-600">
                  <p>Level: {course.level}</p>
                  <p>Duration: {course.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === index ? 'bg-gray-900' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};