
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

// Mock data for courses
const courseData = [
  {
    id: 1,
    title: "Marketing in Digital World",
    description: "Learn the fundamentals of digital marketing and how it differs from traditional marketing.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    modules: 6,
    duration: "4 hours",
    unlocked: true
  },
  {
    id: 2,
    title: "Whatsapp & Email Marketing",
    description: "Master effective strategies for WhatsApp and email campaigns to engage clients.",
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    modules: 5,
    duration: "3.5 hours",
    unlocked: false
  },
  {
    id: 3,
    title: "Content Marketing",
    description: "Create compelling content using AI tools and effective storytelling techniques.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    modules: 7,
    duration: "5 hours",
    unlocked: false
  },
  {
    id: 4,
    title: "Social Media Organic",
    description: "Build your personal brand and generate leads through organic social media strategies.",
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    modules: 6,
    duration: "4.5 hours",
    unlocked: false
  },
  {
    id: 5,
    title: "Power of YouTube",
    description: "Leverage YouTube to grow your insurance business with video marketing.",
    imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    modules: 5,
    duration: "3 hours",
    unlocked: false
  },
  {
    id: 6,
    title: "Converting Leads into Clients",
    description: "Learn techniques to effectively convert leads into long-term clients.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    modules: 4,
    duration: "3 hours",
    unlocked: false
  },
  {
    id: 7,
    title: "Performance/Paid Media",
    description: "Learn about paid media strategies to amplify your digital marketing efforts.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    modules: 5,
    duration: "4 hours",
    unlocked: false
  },
];

const Courses = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Course Catalog</h1>
        <p className="text-gray-600">Explore our comprehensive digital marketing courses.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  modules: number;
  duration: string;
  unlocked: boolean;
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video w-full">
        <img 
          src={course.imageUrl} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{course.title}</CardTitle>
          {!course.unlocked && (
            <div className="bg-gray-200 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          )}
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <BookOpen size={16} className="mr-1" />
            <span>{course.modules} modules</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="mt-auto">
        <Button 
          variant={course.unlocked ? "default" : "outline"} 
          className={`w-full ${course.unlocked ? 'bg-nibp-blue hover:bg-nibp-blue/90' : ''}`}
          asChild
        >
          <Link to={`/dashboard/courses/${course.id}`}>
            {course.unlocked ? 'Start Learning' : 'Unlock Course'}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Courses;
