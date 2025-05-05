
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
}

export const ProgressCard = ({ title, value, icon, description }: ProgressCardProps) => {
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
