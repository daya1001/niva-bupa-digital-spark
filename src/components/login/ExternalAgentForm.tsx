
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const insuranceCompanies = [
  "Star Health Insurance",
  "HDFC ERGO",
  "ICICI Lombard",
  "Bajaj Allianz",
  "SBI General Insurance",
  "Aditya Birla Health Insurance",
  "Care Health Insurance",
  "Max Bupa Health Insurance",
  "Reliance General Insurance",
  "Other"
];

const ExternalAgentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    fullName: '',
    city: '',
    agentCode: '',
    insuranceCompany: '',
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

  const handleInsuranceSelect = (value: string) => {
    setFormData({
      ...formData,
      insuranceCompany: value,
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

    // Validate insurance company selection
    if (!formData.insuranceCompany) {
      toast({
        title: "Missing Information",
        description: "Please select your associated insurance company",
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
        description: "You've been registered successfully. You can now access courses at the external agent price."
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
              <Label htmlFor="extEmail">Email</Label>
              <Input 
                id="extEmail"
                type="email" 
                name="email"
                placeholder="Your email address" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extMobile">Mobile Number</Label>
              <Input 
                id="extMobile"
                type="tel" 
                name="mobile"
                placeholder="10-digit mobile number" 
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extName">Full Name</Label>
              <Input 
                id="extName"
                type="text" 
                name="fullName"
                placeholder="Your full name" 
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extCity">City</Label>
              <Input 
                id="extCity"
                type="text" 
                name="city"
                placeholder="Your city" 
                required
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extAgentCode">Agent Code (Optional)</Label>
              <Input 
                id="extAgentCode"
                type="text" 
                name="agentCode"
                placeholder="Your agent code (if any)" 
                value={formData.agentCode}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insuranceCompany">Associated Insurance Company</Label>
              <Select onValueChange={handleInsuranceSelect} required>
                <SelectTrigger id="insuranceCompany">
                  <SelectValue placeholder="Select insurance company" />
                </SelectTrigger>
                <SelectContent>
                  {insuranceCompanies.map((company) => (
                    <SelectItem key={company} value={company}>{company}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full bg-nibp-blue hover:bg-nibp-lightblue">
              Register & Get OTP
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            External agent price: ₹1499 <span className="line-through text-gray-400">₹2999</span>
          </p>
        </form>
      ) : (
        <form onSubmit={verifyOTP} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="extOtp">Enter OTP</Label>
            <Input 
              id="extOtp"
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

export default ExternalAgentForm;
