
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Book, Clock, CheckCircle } from 'lucide-react';

const Progress = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Progress</h1>
        <p className="text-gray-600">Track your learning journey and achievements</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ProgressCard 
          title="Course Completion"
          value={24}
          icon={<Book size={20} />}
          description="2 of 7 courses in progress"
        />
        <ProgressCard 
          title="Time Invested"
          value={30}
          icon={<Clock size={20} />}
          description="4.5 hours of learning"
        />
        <ProgressCard 
          title="Certificates Earned"
          value={14}
          icon={<Award size={20} />}
          description="1 of 7 certificates earned"
        />
      </div>
      
      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Course Progress</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="mt-6">
          <div className="space-y-6">
            <CourseProgressItem 
              title="Marketing in Digital World"
              progress={100}
              chapters={6}
              chaptersCompleted={6}
              lastActivity="Completed on May 1, 2025"
              certificate={true}
            />
            
            <CourseProgressItem 
              title="Content Marketing"
              progress={45}
              chapters={7}
              chaptersCompleted={3}
              lastActivity="Last activity: Apr 28, 2025"
              certificate={false}
              currentChapter="Module 3: Power of AI tools for content creation"
            />
            
            {[
              "Whatsapp & Email Marketing", 
              "Social Media Organic", 
              "Power of YouTube", 
              "Converting Leads into Clients",
              "Performance/Paid Media"
            ].map((course, index) => (
              <CourseProgressItem 
                key={index}
                title={course}
                progress={0}
                chapters={5}
                chaptersCompleted={0}
                lastActivity="Not started"
                certificate={false}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="mt-6">
          <div className="space-y-4">
            <ActivityItem 
              type="completion"
              title="Completed Module: Marketing in Digital World"
              course="Marketing in Digital World"
              date="May 1, 2025"
            />
            <ActivityItem 
              type="chapter"
              title="Completed Chapter: Power of AI tools for content creation"
              course="Content Marketing"
              date="April 28, 2025"
            />
            <ActivityItem 
              type="certificate"
              title="Certificate Earned: Marketing in Digital World"
              course="Marketing in Digital World"
              date="May 1, 2025"
            />
            <ActivityItem 
              type="quiz"
              title="Quiz Completed: Marketing in Digital World"
              course="Marketing in Digital World"
              score="90%"
              date="May 1, 2025"
            />
            <ActivityItem 
              type="chapter"
              title="Completed Chapter: How the 4Ps have evolved in digital space"
              course="Marketing in Digital World"
              date="April 25, 2025"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ProgressCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
}

const ProgressCard = ({ title, value, icon, description }: ProgressCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className="p-2 bg-nibp-blue/10 rounded-full text-nibp-blue">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Progress</span>
            <span className="text-sm font-medium">{value}%</span>
          </div>
          <Progress value={value} className="h-2" />
          
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface CourseProgressItemProps {
  title: string;
  progress: number;
  chapters: number;
  chaptersCompleted: number;
  lastActivity: string;
  certificate: boolean;
  currentChapter?: string;
}

const CourseProgressItem = ({ 
  title, 
  progress, 
  chapters, 
  chaptersCompleted,
  lastActivity,
  certificate,
  currentChapter
}: CourseProgressItemProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          {certificate && (
            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
              <Award size={12} className="mr-1" />
              Certificate Earned
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-500">Progress</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="text-sm text-gray-600 flex justify-between mb-2">
          <span>
            {chaptersCompleted} of {chapters} chapters completed
          </span>
          <span className="text-gray-500">
            {lastActivity}
          </span>
        </div>
        
        {currentChapter && (
          <div className="mt-4 text-sm text-nibp-blue">
            <span>Currently on: </span>
            <span className="font-medium">{currentChapter}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface ActivityItemProps {
  type: 'chapter' | 'completion' | 'certificate' | 'quiz';
  title: string;
  course: string;
  date: string;
  score?: string;
}

const ActivityItem = ({ type, title, course, date, score }: ActivityItemProps) => {
  const getIcon = () => {
    switch (type) {
      case 'chapter':
        return <CheckCircle className="text-blue-500" size={20} />;
      case 'completion':
        return <Book className="text-green-500" size={20} />;
      case 'certificate':
        return <Award className="text-yellow-500" size={20} />;
      case 'quiz':
        return <CheckCircle className="text-purple-500" size={20} />;
      default:
        return <CheckCircle className="text-gray-500" size={20} />;
    }
  };
  
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg">
      <div className="bg-gray-100 p-2 rounded-full">
        {getIcon()}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">
          Course: {course}
          {score && <span> • Score: {score}</span>}
        </p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>
    </div>
  );
};

export default Progress;
