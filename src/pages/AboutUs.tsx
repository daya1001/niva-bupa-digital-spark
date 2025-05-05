
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About NIVA BUPA Digital Academy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              The NIVA BUPA Digital Academy is a comprehensive learning platform designed 
              specifically for insurance professionals looking to enhance their digital marketing skills 
              and stay ahead in today's competitive landscape.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to empower insurance agents and professionals with the digital marketing 
              knowledge and skills needed to succeed in the modern era. We believe that by equipping 
              our team with cutting-edge digital strategies, we can better serve our customers and 
              maintain our position as a leader in the health insurance industry.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Comprehensive digital marketing courses tailored for the insurance industry</li>
              <li>Expert-led training from industry professionals</li>
              <li>Practical, hands-on learning experiences</li>
              <li>Certification programs to validate your skills</li>
              <li>Continuous learning resources to keep you updated on the latest trends</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose NIVA BUPA Digital Academy?</h2>
            <p className="mb-6">
              The digital landscape is constantly evolving, and staying relevant requires continuous 
              learning and adaptation. Our academy provides:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Industry-specific training focused on health insurance marketing</li>
              <li>Flexible learning options to fit your busy schedule</li>
              <li>Community support from fellow professionals</li>
              <li>Direct application of skills to your daily work</li>
              <li>Recognition and advancement opportunities within NIVA BUPA</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
