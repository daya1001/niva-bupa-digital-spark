
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const EmployeeForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    fullName: '',
    city: '',
    employeeCode: '',
  });
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate company email
    if (!formData.email.endsWith('@nivabupa.com')) {
      toast({
        title: "Invalid Email",
        description: "Please use your Niva Bupa email address (@nivabupa.com)",
        variant: "destructive",
      });
      return;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    // Show OTP input
    setShowOTP(true);
    toast({
      title: "OTP Sent!",
      description: "A verification code has been sent to your email and mobile number."
    });
  };

  const verifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock OTP verification
    if (otp === '1234') {
      toast({
        title: "Success!",
        description: "You've been registered successfully. You can now access all courses."
      });
      // Redirect to dashboard (in a real app)
      // window.location.href = '/dashboard';
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct verification code",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {!showOTP ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email (Niva Bupa Email only)</Label>
              <Input 
                id="email"
                type="email" 
                name="email"
                placeholder="your.name@nivabupa.com" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input 
                id="mobile"
                type="tel" 
                name="mobile"
                placeholder="10-digit mobile number" 
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName"
                type="text" 
                name="fullName"
                placeholder="Your full name" 
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input 
                id="city"
                type="text" 
                name="city"
                placeholder="Your city" 
                required
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="employeeCode">Employee Code</Label>
              <Input 
                id="employeeCode"
                type="text" 
                name="employeeCode"
                placeholder="Your employee code" 
                required
                value={formData.employeeCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full bg-nibp-blue hover:bg-nibp-lightblue">
              Register & Get OTP
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            All courses are free for Niva Bupa employees
          </p>
        </form>
      ) : (
        <form onSubmit={verifyOTP} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP</Label>
            <Input 
              id="otp"
              type="text" 
              placeholder="Enter verification code" 
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="text-center text-xl tracking-wider"
              maxLength={4}
            />
            <p className="text-sm text-gray-500">
              OTP sent to {formData.email} and {formData.mobile}
            </p>
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full bg-nibp-blue hover:bg-nibp-lightblue">
              Verify & Login
            </Button>
            <Button
              type="button" 
              variant="outline" 
              className="w-full mt-2"
              onClick={() => setShowOTP(false)}
            >
              Go Back
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default EmployeeForm;
