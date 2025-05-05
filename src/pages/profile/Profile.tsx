
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, Building, CreditCard, LogOut } from 'lucide-react';

const Profile = () => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    // Simulate API request
    setTimeout(() => {
      setSaving(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved successfully."
      });
    }, 1000);
  };
  
  const handleLogout = () => {
    // Simulate logout
    toast({
      title: "Logging out",
      description: "You have been logged out successfully."
    });
    
    // Redirect after toast
    setTimeout(() => {
      window.location.href = '/login';
    }, 1500);
  };
  
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-gray-600">View and update your account information</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <User size={48} className="text-gray-400" />
              </div>
              
              <h2 className="text-xl font-bold mb-1">John Doe</h2>
              <p className="text-gray-500 mb-4">Niva Bupa Employee</p>
              
              <Button variant="outline" className="w-full mb-2">
                Change Avatar
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={handleLogout}
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="personal">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="account">Account Settings</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSave} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <div className="relative">
                          <Input 
                            id="fullName" 
                            defaultValue="John Doe"
                          />
                          <User size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Input 
                            id="email" 
                            type="email"
                            defaultValue="john.doe@nivabupa.com"
                            readOnly
                            className="bg-gray-50"
                          />
                          <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">Email address cannot be changed</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Input 
                            id="phone" 
                            defaultValue="+91 9876543210"
                          />
                          <Phone size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <div className="relative">
                          <Input 
                            id="city" 
                            defaultValue="Mumbai"
                          />
                          <MapPin size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="employeeCode">Employee Code</Label>
                        <div className="relative">
                          <Input 
                            id="employeeCode" 
                            defaultValue="NB12345"
                            readOnly
                            className="bg-gray-50"
                          />
                          <Building size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">Employee code cannot be changed</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Change Password</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input 
                          id="currentPassword" 
                          type="password"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input 
                          id="newPassword" 
                          type="password"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input 
                          id="confirmPassword" 
                          type="password"
                        />
                      </div>
                      
                      <Button>Update Password</Button>
                    </div>
                    
                    <div className="border-t pt-6 space-y-4">
                      <h3 className="text-lg font-medium">Notification Preferences</h3>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive updates about courses and live sessions</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-nibp-blue"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-gray-500">Receive text alerts about upcoming sessions</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-nibp-blue"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing Communications</p>
                          <p className="text-sm text-gray-500">Receive updates about new courses and features</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-nibp-blue"></div>
                        </label>
                      </div>
                      
                      <Button variant="outline">Save Preferences</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="subscription" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Subscription</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <CheckIcon className="text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-green-800">Employee Plan</h3>
                          <p className="text-green-700">
                            You have full access to all courses and features as a Niva Bupa employee.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="font-medium">Subscription Details</h3>
                          <p className="text-sm text-gray-500">Employee Plan</p>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          Active
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Plan Price</span>
                          <span className="font-medium">₹2,999</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Employee Discount</span>
                          <span className="text-green-600">-₹2,999</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-medium">Total</span>
                          <span className="font-medium">₹0</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Features Included:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckIcon className="text-green-500 mr-2" />
                            <span>Access to all 7 courses</span>
                          </li>
                          <li className="flex items-center">
                            <CheckIcon className="text-green-500 mr-2" />
                            <span>Live Q&A sessions</span>
                          </li>
                          <li className="flex items-center">
                            <CheckIcon className="text-green-500 mr-2" />
                            <span>Course certificates</span>
                          </li>
                          <li className="flex items-center">
                            <CheckIcon className="text-green-500 mr-2" />
                            <span>Unlimited access</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default Profile;
