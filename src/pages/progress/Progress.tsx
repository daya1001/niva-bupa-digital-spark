
import React from 'react';
import { ProgressOverview } from './components/ProgressOverview';
import { ProgressTabs } from './components/ProgressTabs';

const ProgressPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Progress</h1>
        <p className="text-gray-600">Track your learning journey and achievements</p>
      </div>
      
      <ProgressOverview />
      <ProgressTabs />
    </div>
  );
};

export default ProgressPage;
