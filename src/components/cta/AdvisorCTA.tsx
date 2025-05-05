
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AdvisorCTA = () => {
  return (
    <div className="bg-gradient-to-r from-nibp-blue to-nibp-lightblue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Niva Bupa Advisor</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-6 max-w-2xl">
              Join our network of health insurance advisors and build a rewarding career helping people protect what matters most - their health.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 flex-shrink-0" />
                <span>Competitive commission structure</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 flex-shrink-0" />
                <span>Comprehensive training and development</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 flex-shrink-0" />
                <span>Digital tools to support your business growth</span>
              </li>
            </ul>
            <Button size="lg" variant="default" className="bg-white text-nibp-blue hover:bg-gray-100">
              Apply Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="lg:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
              alt="Niva Bupa Advisor"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`text-nibp-orange ${className}`}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default AdvisorCTA;
