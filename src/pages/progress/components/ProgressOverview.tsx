
import React from 'react';
import { ProgressCard } from './ProgressCard';
import { Award, Book, Clock } from 'lucide-react';

export const ProgressOverview = () => {
  return (
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
  );
};
