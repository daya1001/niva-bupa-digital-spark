
import React from 'react';
import { ActivityItem } from './ActivityItem';

export const ActivityTab = () => {
  return (
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
  );
};
