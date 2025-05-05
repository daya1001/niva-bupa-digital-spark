
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-center">
            Get in touch with the NIVA BUPA Digital Academy team
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..." 
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-nibp-blue hover:bg-nibp-lightblue">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our courses or need assistance? 
                  Contact us using the information below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-nibp-blue mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:digitalacademy@nivabupa.com" className="text-nibp-blue hover:underline">
                        digitalacademy@nivabupa.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-nibp-blue mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p>1800-XXX-XXXX (Toll Free)</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-nibp-blue mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Office Location</p>
                      <p>NIVA BUPA Health Insurance</p>
                      <p className="text-sm text-gray-500">
                        Head Office, Tower A & D, 11th Floor, DLF Cyber City,
                        <br />Gurgaon, Haryana - 122002, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-medium mb-2">Join Our Team</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Interested in becoming an instructor or joining the Digital Academy team?
                </p>
                <Button variant="outline" className="text-nibp-blue border-nibp-blue hover:bg-nibp-blue/10">
                  Learn About Careers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
