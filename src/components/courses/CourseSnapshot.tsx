
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const courses = [
  {
    id: 1,
    title: "Marketing in Digital World",
    description: "Learn the fundamentals of digital marketing and how it differs from traditional marketing.",
    icon: "📱",
    modules: 6,
    duration: "4 hours",
  },
  {
    id: 2,
    title: "WhatsApp & Email Marketing",
    description: "Master effective strategies for WhatsApp and email campaigns to engage clients.",
    icon: "💬",
    modules: 5,
    duration: "3.5 hours",
  },
  {
    id: 3,
    title: "Content Marketing",
    description: "Create compelling content using AI tools and effective storytelling techniques.",
    icon: "✍️",
    modules: 7,
    duration: "5 hours",
  },
  {
    id: 4,
    title: "Social Media Organic",
    description: "Build your personal brand and generate leads through organic social media strategies.",
    icon: "🌐",
    modules: 6,
    duration: "4.5 hours",
  },
  {
    id: 5,
    title: "Power of YouTube",
    description: "Leverage YouTube to grow your insurance business with video marketing.",
    icon: "🎬",
    modules: 5,
    duration: "3 hours",
  },
  {
    id: 6,
    title: "Converting Leads into Clients",
    description: "Learn techniques to effectively convert leads into long-term clients.",
    icon: "🤝",
    modules: 4,
    duration: "3 hours",
  },
];

const CourseSnapshot = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-nibp-blue">Course Snapshot</h2>
        <p className="text-gray-600 text-center mb-10">Explore our comprehensive curriculum designed for insurance professionals</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.modules} modules</span>
                  <span>{course.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSnapshot;
