
import React from 'react';
import { Award, Book, CheckCircle } from 'lucide-react';

interface ActivityItemProps {
  type: 'chapter' | 'completion' | 'certificate' | 'quiz';
  title: string;
  course: string;
  date: string;
  score?: string;
}

export const ActivityItem = ({ type, title, course, date, score }: ActivityItemProps) => {
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
