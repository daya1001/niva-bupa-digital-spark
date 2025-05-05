
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award } from 'lucide-react';

interface CourseProgressItemProps {
  title: string;
  progress: number;
  chapters: number;
  chaptersCompleted: number;
  lastActivity: string;
  certificate: boolean;
  currentChapter?: string;
}

export const CourseProgressItem = ({ 
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
