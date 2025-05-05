
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Award, Download, Share2 } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Achievements</h1>
        <p className="text-gray-600">Certificates and accomplishments in your learning journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Certificates"
          value="1/7"
          description="Certificates earned"
        />
        <StatCard 
          title="Average Score"
          value="90%"
          description="Quiz performance"
        />
        <StatCard 
          title="Hours Invested"
          value="4.5"
          description="Learning time"
        />
      </div>
      
      <Tabs defaultValue="certificates">
        <TabsList>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        
        <TabsContent value="certificates" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertificateCard 
              title="Marketing in Digital World"
              issueDate="May 1, 2025"
              imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            
            {['Whatsapp & Email Marketing', 'Content Marketing', 'Social Media Organic', 'Power of YouTube', 'Converting Leads into Clients', 'Performance/Paid Media'].map((course, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center z-10">
                  <div className="bg-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                </div>
                <CertificateCard 
                  title={course}
                  issueDate="Not completed"
                  imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  locked={true}
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="badges" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <BadgeCard 
              title="Quick Learner"
              description="Complete a course in less than 2 days"
              imageUrl="/placeholder.svg"
              earned={true}
            />
            <BadgeCard 
              title="Perfect Score"
              description="Get 100% in any course quiz"
              imageUrl="/placeholder.svg"
              earned={false}
            />
            <BadgeCard 
              title="Early Bird"
              description="Complete 3 course sessions before 9 AM"
              imageUrl="/placeholder.svg"
              earned={false}
            />
            <BadgeCard 
              title="Weekend Warrior"
              description="Complete 5 chapters on weekends"
              imageUrl="/placeholder.svg"
              earned={true}
            />
            <BadgeCard 
              title="Social Sharer"
              description="Share 3 certificates on social media"
              imageUrl="/placeholder.svg"
              earned={false}
            />
            <BadgeCard 
              title="Consistent Learner"
              description="Login for 7 consecutive days"
              imageUrl="/placeholder.svg"
              earned={true}
            />
            <BadgeCard 
              title="Q&A Participant"
              description="Attend 3 live Q&A sessions"
              imageUrl="/placeholder.svg"
              earned={false}
            />
            <BadgeCard 
              title="Completionist"
              description="Complete all 7 courses"
              imageUrl="/placeholder.svg"
              earned={false}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Rank</th>
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">City</th>
                      <th className="text-left py-3 px-4">Courses Completed</th>
                      <th className="text-left py-3 px-4">Hours Spent</th>
                      <th className="text-left py-3 px-4">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { rank: 1, name: "Rahul Sharma", city: "Mumbai", completed: 3, hours: 12, points: 950 },
                      { rank: 2, name: "Priya Singh", city: "Delhi", completed: 2, hours: 10, points: 880 },
                      { rank: 3, name: "Vikram Patel", city: "Bangalore", completed: 2, hours: 9.5, points: 860 },
                      { rank: 4, name: "John Doe", city: "Chennai", completed: 2, hours: 8, points: 780 },
                      { rank: 5, name: "Ananya Desai", city: "Hyderabad", completed: 1, hours: 7, points: 650 },
                      { rank: 6, name: "Sanjay Gupta", city: "Kolkata", completed: 1, hours: 6.5, points: 620 },
                      { rank: 7, name: "Neha Kumar", city: "Pune", completed: 1, hours: 5, points: 550 },
                      { rank: 8, name: "Amit Verma", city: "Ahmedabad", completed: 1, hours: 4.5, points: 520 },
                      { rank: 9, name: "Pooja Reddy", city: "Jaipur", completed: 1, hours: 4, points: 500 },
                      { rank: 10, name: "Rajesh Khanna", city: "Lucknow", completed: 1, hours: 3.5, points: 480 },
                    ].map((user) => (
                      <tr key={user.rank} className="border-b">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className={`mr-2 ${user.rank <= 3 ? 'text-yellow-500 font-bold' : ''}`}>
                              {user.rank}
                            </span>
                            {user.rank <= 3 && <Award size={16} className="text-yellow-500" />}
                          </div>
                        </td>
                        <td className="py-3 px-4">{user.name}</td>
                        <td className="py-3 px-4">{user.city}</td>
                        <td className="py-3 px-4">{user.completed}</td>
                        <td className="py-3 px-4">{user.hours}</td>
                        <td className="py-3 px-4 font-medium">{user.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
}

const StatCard = ({ title, value, description }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};

interface CertificateCardProps {
  title: string;
  issueDate: string;
  imageUrl: string;
  locked?: boolean;
}

const CertificateCard = ({ title, issueDate, imageUrl, locked = false }: CertificateCardProps) => {
  return (
    <Card className={`overflow-hidden h-full ${locked ? 'opacity-70' : ''}`}>
      <div className="aspect-[3/2] w-full">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">
          {locked ? issueDate : `Issued on: ${issueDate}`}
        </p>
        
        {!locked && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Download size={16} className="mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface BadgeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  earned: boolean;
}

const BadgeCard = ({ title, description, imageUrl, earned }: BadgeCardProps) => {
  return (
    <Card className={`text-center ${!earned ? 'opacity-60' : ''}`}>
      <CardContent className="p-6">
        <div className="mb-4 w-24 h-24 mx-auto">
          <div className="rounded-full bg-gray-100 w-full h-full flex items-center justify-center">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-16 h-16"
            />
          </div>
        </div>
        
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        
        <div className={`text-xs ${earned ? 'text-green-600' : 'text-gray-400'}`}>
          {earned ? (
            <span className="flex items-center justify-center">
              <Award size={12} className="mr-1" />
              Earned
            </span>
          ) : "Not earned yet"}
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;
