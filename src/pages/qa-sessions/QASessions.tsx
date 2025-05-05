
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Video, Users, MessageSquare, Play } from 'lucide-react';

const QASessions = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Live Q&A Sessions</h1>
        <p className="text-gray-600">Join live sessions with instructors and get your questions answered</p>
      </div>
      
      <div className="bg-nibp-blue/10 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Next Live Session</h2>
            <div className="text-lg mb-2">Content Marketing Deep Dive</div>
            <div className="flex items-center text-gray-600 gap-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>June 12, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>11:00 AM</span>
              </div>
            </div>
          </div>
          
          <Button className="bg-nibp-blue hover:bg-nibp-blue/90">
            Register Now
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="past">Past Recordings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Content Marketing Deep Dive",
                instructor: "Punita Parekh",
                date: "June 12, 2025",
                time: "11:00 AM",
                participants: 45,
                module: "Content Marketing",
                description: "Learn advanced content creation strategies using AI tools and effective storytelling techniques."
              },
              {
                title: "Mastering Social Media Strategy",
                instructor: "Punita Parekh",
                date: "June 19, 2025",
                time: "11:00 AM",
                participants: 32,
                module: "Social Media Organic",
                description: "Join this session to master organic social media growth strategies for your insurance business."
              },
              {
                title: "WhatsApp Marketing Techniques",
                instructor: "Punita Parekh",
                date: "June 26, 2025",
                time: "11:00 AM",
                participants: 28,
                module: "WhatsApp & Email Marketing",
                description: "Learn effective WhatsApp marketing strategies to engage with clients and prospects."
              },
              {
                title: "YouTube Channel Growth",
                instructor: "Punita Parekh",
                date: "July 3, 2025",
                time: "11:00 AM",
                participants: 20,
                module: "Power of YouTube",
                description: "Learn how to grow your YouTube channel and leverage video content for your business."
              },
              {
                title: "Lead Conversion Masterclass",
                instructor: "Punita Parekh",
                date: "July 10, 2025",
                time: "11:00 AM",
                participants: 38,
                module: "Converting Leads into Clients",
                description: "Master advanced techniques to convert leads into long-term insurance clients."
              },
              {
                title: "Paid Advertising Strategy",
                instructor: "Punita Parekh",
                date: "July 17, 2025",
                time: "11:00 AM",
                participants: 25,
                module: "Performance/Paid Media",
                description: "Learn how to optimize your paid advertising campaigns for maximum ROI."
              }
            ].map((session, index) => (
              <SessionCard 
                key={index}
                session={session}
                upcoming={true}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Marketing Foundations",
                instructor: "Punita Parekh",
                date: "May 15, 2025",
                time: "11:00 AM",
                participants: 52,
                module: "Marketing in Digital World",
                description: "An introduction to the fundamentals of digital marketing for insurance professionals.",
                recording: "https://example.com/recording1",
                duration: "45 minutes"
              },
              {
                title: "Q&A: Digital Marketing Best Practices",
                instructor: "Punita Parekh",
                date: "May 22, 2025",
                time: "11:00 AM",
                participants: 48,
                module: "Marketing in Digital World",
                description: "A follow-up session answering questions about digital marketing fundamentals.",
                recording: "https://example.com/recording2",
                duration: "50 minutes"
              }
            ].map((session, index) => (
              <SessionCard 
                key={index}
                session={session}
                upcoming={false}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Submit Your Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div>
                <label htmlFor="session" className="block text-sm font-medium mb-1">
                  Session
                </label>
                <select 
                  id="session" 
                  className="w-full p-2 border rounded-md"
                  defaultValue=""
                >
                  <option value="" disabled>Select a session</option>
                  <option value="1">Content Marketing Deep Dive - Jun 12</option>
                  <option value="2">Mastering Social Media Strategy - Jun 19</option>
                  <option value="3">WhatsApp Marketing Techniques - Jun 26</option>
                  <option value="4">YouTube Channel Growth - Jul 3</option>
                  <option value="5">Lead Conversion Masterclass - Jul 10</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="question" className="block text-sm font-medium mb-1">
                  Your Question
                </label>
                <textarea 
                  id="question" 
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Type your question here..."
                />
              </div>
              
              <Button className="w-full">Submit Question</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

interface Session {
  title: string;
  instructor: string;
  date: string;
  time: string;
  participants: number;
  module: string;
  description: string;
  recording?: string;
  duration?: string;
}

interface SessionCardProps {
  session: Session;
  upcoming: boolean;
}

const SessionCard = ({ session, upcoming }: SessionCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="text-sm text-nibp-blue mb-1">{session.module}</div>
        <CardTitle>{session.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="py-2">
        <p className="text-sm text-gray-600 mb-4">{session.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-gray-500" />
            <span>{session.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-gray-500" />
            <span>{session.time}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2 text-gray-500" />
            <span>{session.participants} participants</span>
          </div>
          {!upcoming && session.duration && (
            <div className="flex items-center">
              <Video size={16} className="mr-2 text-gray-500" />
              <span>{session.duration}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="mt-auto pt-4">
        {upcoming ? (
          <Button className="w-full bg-nibp-blue hover:bg-nibp-blue/90">
            Register Now
          </Button>
        ) : (
          <Button className="w-full" variant="outline">
            <Play size={16} className="mr-2" />
            Watch Recording
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QASessions;
