
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmployeeForm from './EmployeeForm';
import AgentForm from './AgentForm';
import ExternalAgentForm from './ExternalAgentForm';

const LoginTabs = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Join NIVA BUPA Digital Academy</h2>
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="employee">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="employee">Employees</TabsTrigger>
              <TabsTrigger value="agent">NIVA BUPA Agents</TabsTrigger>
              <TabsTrigger value="external">External Agents</TabsTrigger>
            </TabsList>
            <TabsContent value="employee">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-nibp-blue">Employee Registration</h3>
                <EmployeeForm />
              </div>
            </TabsContent>
            <TabsContent value="agent">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-nibp-blue">NIVA BUPA Agent Registration</h3>
                <AgentForm />
              </div>
            </TabsContent>
            <TabsContent value="external">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-nibp-blue">External Agent Registration</h3>
                <ExternalAgentForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LoginTabs;
