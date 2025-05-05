
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CoursesTab } from './CoursesTab';
import { ActivityTab } from './ActivityTab';

export const ProgressTabs = () => {
  return (
    <Tabs defaultValue="courses">
      <TabsList>
        <TabsTrigger value="courses">Course Progress</TabsTrigger>
        <TabsTrigger value="activity">Recent Activity</TabsTrigger>
      </TabsList>
      
      <TabsContent value="courses" className="mt-6">
        <CoursesTab />
      </TabsContent>
      
      <TabsContent value="activity" className="mt-6">
        <ActivityTab />
      </TabsContent>
    </Tabs>
  );
};
