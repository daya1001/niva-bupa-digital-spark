
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Industry-Specific Knowledge",
    description: "Content tailored specifically for insurance professionals to maximize relevance and application.",
  },
  {
    id: 2,
    title: "Practical Skills & Tools",
    description: "Learn actionable strategies using free tools that you can implement immediately in your work.",
  },
  {
    id: 3,
    title: "Expert-Led Content",
    description: "Courses designed and taught by industry experts with decades of marketing experience.",
  },
  {
    id: 4,
    title: "Certification",
    description: "Earn certificates upon course completion to showcase your digital marketing expertise.",
  },
  {
    id: 5,
    title: "Community Access",
    description: "Connect with fellow insurance professionals and share insights and experiences.",
  },
  {
    id: 6,
    title: "Live Q&A Sessions",
    description: "Participate in interactive sessions with instructors to clarify your doubts.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="bg-nibp-blue text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">What's In It For You?</h2>
        <p className="text-blue-100 text-center mb-12">Discover how our Digital Academy helps you excel in your career</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex">
              <CheckCircle size={24} className="text-nibp-orange flex-shrink-0 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
