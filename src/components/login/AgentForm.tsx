
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const AgentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    fullName: '',
    city: '',
    agentCode: '',
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

    // Validate mobile number
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    // Mock agent code validation
    if (!/^[A-Z0-9]{6,10}$/.test(formData.agentCode)) {
      toast({
        title: "Invalid Agent Code",
        description: "Please enter a valid Niva Bupa agent code",
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
        description: "You've been registered successfully. You can now access courses at the discounted price."
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
              <Label htmlFor="agentEmail">Email</Label>
              <Input 
                id="agentEmail"
                type="email" 
                name="email"
                placeholder="Your email address" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agentMobile">Mobile Number</Label>
              <Input 
                id="agentMobile"
                type="tel" 
                name="mobile"
                placeholder="10-digit mobile number" 
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agentName">Full Name</Label>
              <Input 
                id="agentName"
                type="text" 
                name="fullName"
                placeholder="Your full name" 
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agentCity">City</Label>
              <Input 
                id="agentCity"
                type="text" 
                name="city"
                placeholder="Your city" 
                required
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="agentCode">Agent Code</Label>
              <Input 
                id="agentCode"
                type="text" 
                name="agentCode"
                placeholder="Your Niva Bupa agent code" 
                required
                value={formData.agentCode}
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
            Special price for Niva Bupa agents: ₹499 <span className="line-through text-gray-400">₹2999</span>
          </p>
        </form>
      ) : (
        <form onSubmit={verifyOTP} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="agentOtp">Enter OTP</Label>
            <Input 
              id="agentOtp"
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

export default AgentForm;
