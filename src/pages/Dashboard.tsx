
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Calendar, Clock, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome, John</h1>
          <p className="text-gray-600">Continue your learning journey with these courses.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Course Progress</CardTitle>
              <CardDescription>Your overall progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Completion</span>
                  <span className="text-sm font-medium">24%</span>
                </div>
                <Progress value={24} className="h-2" />
                
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Modules completed</p>
                    <p className="text-xl font-semibold">2/7</p>
                  </div>
                  <div className="h-10 border-r border-gray-200"></div>
                  <div>
                    <p className="text-sm text-gray-500">Time spent</p>
                    <p className="text-xl font-semibold">4h 20m</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Next Live Session</CardTitle>
              <CardDescription>Upcoming Q&A</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-nibp-blue/10 p-3 rounded-lg flex items-start gap-3">
                  <Calendar size={20} className="text-nibp-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium">Content Marketing Deep Dive</h4>
                    <p className="text-sm text-gray-500">With Punita Parekh</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-gray-500" />
                    <span className="text-sm">June 12, 2023</span>
                  </div>
                  <span className="text-sm">11:00 AM</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full bg-nibp-blue hover:bg-nibp-blue/90">Register Now</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Your Achievements</CardTitle>
              <CardDescription>Certificates earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-nibp-orange/20 flex items-center justify-center">
                    <Trophy size={28} className="text-nibp-orange" />
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl font-semibold">1 Certificate</p>
                  <p className="text-sm text-gray-500">Completed "Marketing in Digital World"</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Certificate</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Tabs defaultValue="continue">
            <TabsList className="mb-4">
              <TabsTrigger value="continue">Continue Learning</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="popular">Popular Courses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="continue" className="space-y-4">
              <ContinueLearningSection />
            </TabsContent>
            
            <TabsContent value="recommended" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recommended courses would go here */}
                <CourseCard 
                  title="Social Media Organic"
                  description="Build your personal brand and generate leads through organic social media strategies."
                  progress={0}
                  imageUrl="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  modules={6}
                  duration="4.5 hours"
                />
                <CourseCard 
                  title="Whatsapp & Email Marketing"
                  description="Master effective strategies for WhatsApp and email campaigns to engage clients."
                  progress={0}
                  imageUrl="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  modules={5}
                  duration="3.5 hours"
                />
                <CourseCard 
                  title="Converting Leads into Clients"
                  description="Learn techniques to effectively convert leads into long-term clients."
                  progress={0}
                  imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  modules={4}
                  duration="3 hours"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Popular courses would go here */}
                <CourseCard 
                  title="Power of YouTube"
                  description="Leverage YouTube to grow your insurance business with video marketing."
                  progress={0}
                  imageUrl="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  modules={5}
                  duration="3 hours"
                />
                <CourseCard 
                  title="Marketing in Digital World"
                  description="Learn the fundamentals of digital marketing and how it differs from traditional marketing."
                  progress={0}
                  imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  modules={6}
                  duration="4 hours"
                />
                <CourseCard 
                  title="Content Marketing"
                  description="Create compelling content using AI tools and effective storytelling techniques."
                  progress={0}
                  imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  modules={7}
                  duration="5 hours"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

const ContinueLearningSection = () => {
  return (
    <div className="space-y-8">
      <CourseCard 
        title="Marketing in Digital World"
        description="Learn the fundamentals of digital marketing and how it differs from traditional marketing."
        progress={100}
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        modules={6}
        duration="4 hours"
        completed={true}
      />
      
      <CourseCard 
        title="Content Marketing"
        description="Create compelling content using AI tools and effective storytelling techniques."
        progress={45}
        imageUrl="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        modules={7}
        duration="5 hours"
        currentModule="Module 3: Power of AI tools for content creation"
      />
    </div>
  );
};

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  imageUrl: string;
  modules: number;
  duration: string;
  completed?: boolean;
  currentModule?: string;
}

const CourseCard = ({ title, description, progress, imageUrl, modules, duration, completed, currentModule }: CourseCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {completed && (
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                <Trophy size={12} className="mr-1" />
                Completed
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mb-4">{description}</p>
          
          {currentModule && (
            <div className="mb-4 text-sm text-nibp-blue">
              <span>Currently on: </span>
              <span className="font-medium">{currentModule}</span>
            </div>
          )}
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <BookIcon className="mr-1" />
              <span>{modules} modules</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="mr-1" />
              <span>{duration}</span>
            </div>
          </div>
          
          <Button variant={completed ? "outline" : "default"} className={`w-full ${!completed ? 'bg-nibp-blue hover:bg-nibp-blue/90' : ''}`}>
            {completed ? 'View Certificate' : 'Continue Learning'}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const BookIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ClockIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default Dashboard;
