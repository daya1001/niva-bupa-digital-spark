import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock, BookOpen, Award, CheckCircle, LockIcon } from 'lucide-react';

// Mock data for courses
const coursesData = {
  1: {
    id: 1,
    title: "Marketing in Digital World",
    description: "Learn the fundamentals of digital marketing and how it differs from traditional marketing.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    progress: 0,
    duration: "4 hours",
    instructor: "Punita Parekh",
    unlocked: true,
    chapters: [
      {
        id: 1,
        title: "Definition and benefits of Digital Marketing",
        duration: "15 min",
        videoUrl: "#",
        completed: false
      },
      {
        id: 2,
        title: "Traditional Marketing VS Digital Marketing",
        duration: "20 min",
        videoUrl: "#",
        completed: false
      },
      {
        id: 3,
        title: "How the 4Ps have evolved in digital space",
        duration: "25 min",
        videoUrl: "#",
        completed: false
      },
      {
        id: 4,
        title: "Customer behaviour in digital domain",
        duration: "30 min",
        videoUrl: "#",
        completed: false
      },
      {
        id: 5,
        title: "Various Digital Marketing channels",
        duration: "20 min",
        videoUrl: "#",
        completed: false
      }
    ],
    nextSession: {
      title: "Live Q&A: Digital Marketing Fundamentals",
      date: "June 15, 2025",
      time: "11:00 AM"
    }
  },
  // Other courses would be defined here
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData[Number(courseId)];
  
  if (!course) {
    return <div className="container mx-auto py-8">Course not found</div>;
  }
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="mb-8">
            <Link to="/dashboard/courses" className="text-nibp-blue hover:underline mb-2 inline-block">← Back to Courses</Link>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-600 mb-4">{course.description}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-gray-500" />
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen size={16} className="mr-1 text-gray-500" />
                <span className="text-sm text-gray-500">{course.chapters.length} chapters</span>
              </div>
              <div className="flex items-center">
                <Award size={16} className="mr-1 text-nibp-blue" />
                <span className="text-sm text-nibp-blue">Certificate on completion</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-500">Course Progress</span>
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          </div>
          
          <Tabs defaultValue="chapters">
            <TabsList>
              <TabsTrigger value="chapters">Chapters</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chapters" className="mt-6">
              <div className="space-y-4">
                {course.chapters.map((chapter, index) => (
                  <ChapterItem 
                    key={chapter.id} 
                    chapter={chapter}
                    index={index}
                    unlocked={course.unlocked}
                    courseId={course.id}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="overview" className="mt-6">
              <div className="prose max-w-none">
                <h3>About this course</h3>
                <p>
                  This comprehensive course covers all aspects of digital marketing, with a focus on practical applications for insurance professionals. You'll learn the fundamentals of digital marketing, understand how it differs from traditional approaches, and discover strategies to apply these concepts in your day-to-day work.
                </p>
                
                <h3>What you'll learn</h3>
                <ul>
                  <li>The core principles of digital marketing and its benefits</li>
                  <li>How digital marketing differs from traditional marketing methods</li>
                  <li>The evolution of the 4Ps in the digital space</li>
                  <li>Understanding customer behavior in the digital domain</li>
                  <li>Major digital marketing channels and how to use them effectively</li>
                </ul>
                
                <h3>Requirements</h3>
                <ul>
                  <li>No prior experience required - suitable for beginners</li>
                  <li>Basic computer skills and internet access</li>
                  <li>Eagerness to learn and apply digital marketing concepts</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="instructor" className="mt-6">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Punita Parekh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Punita Parekh</h3>
                  <p className="text-gray-600 mb-4">Content Marketer & Mentor</p>
                  
                  <p className="mb-4">
                    Punita believes in humanity and helping others. She is an optimist who believes in a bright future and our ability to build it together. Her purpose is to inspire people to do what inspires them so that, together, each of us can change our world for the better.
                  </p>
                  
                  <p>
                    She is a media veteran for over 2 decades specialized in Broadcast Media in Content Marketing, Storytelling for brands where she has been curating customized & Integrated Solutions for Brands across various domains and sectors.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="md:w-1/3">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-video w-full mb-6">
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              
              <Button className="w-full bg-nibp-blue hover:bg-nibp-blue/90 mb-4">
                {course.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                <Play size={16} className="ml-2" />
              </Button>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Live Q&A Session</h3>
                <div className="bg-nibp-blue/10 p-4 rounded-lg">
                  <p className="font-medium">{course.nextSession.title}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>{course.nextSession.date}</span>
                    <span>{course.nextSession.time}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-3">
                    Register Now
                  </Button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Course Includes</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-500" />
                    <span>{course.duration} of video content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-500" />
                    <span>{course.chapters.length} interactive chapters</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-500" />
                    <span>Live Q&A sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-500" />
                    <span>Completion certificate</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-500" />
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface Chapter {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
}

const ChapterItem = ({ 
  chapter, 
  index, 
  unlocked,
  courseId 
}: { 
  chapter: Chapter; 
  index: number;
  unlocked: boolean;
  courseId: number;
}) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-nibp-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            {index + 1}
          </div>
          <div>
            <h3 className="font-medium">{chapter.title}</h3>
            <p className="text-sm text-gray-500">{chapter.duration}</p>
          </div>
        </div>
        
        {unlocked ? (
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center"
            asChild
          >
            <Link to={`/dashboard/courses/${courseId}/chapters/${chapter.id}`}>
              {chapter.completed ? (
                <>
                  <CheckCircle size={16} className="mr-2 text-green-500" />
                  Completed
                </>
              ) : (
                <>
                  <Play size={16} className="mr-2" />
                  Start
                </>
              )}
            </Link>
          </Button>
        ) : (
          <div className="flex items-center text-gray-400">
            <LockIcon size={16} className="mr-2" />
            Locked
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
