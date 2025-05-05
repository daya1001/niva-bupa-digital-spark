
import React from 'react';
import { CourseProgressItem } from './CourseProgressItem';

export const CoursesTab = () => {
  return (
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
  );
};
