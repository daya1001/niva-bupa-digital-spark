
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutAcademy = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Digital Academy"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-nibp-blue">About Digital Academy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              NIVA BUPA Digital Academy is designed to empower insurance professionals with cutting-edge 
              digital marketing skills. Our comprehensive curriculum covers everything from social media 
              marketing to content creation, email campaigns, and lead generation strategies specially 
              tailored for the insurance industry.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you're an employee, an agent, or an external insurance professional, our courses 
              will help you leverage digital tools to grow your business, connect with clients, and stay 
              ahead in today's competitive market.
            </p>
            <div className="flex items-center text-nibp-blue cursor-pointer group">
              <span className="font-medium">Learn more about our mission</span>
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAcademy;
