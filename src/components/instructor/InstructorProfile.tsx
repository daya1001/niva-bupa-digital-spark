
import React from 'react';

const InstructorProfile = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-nibp-blue">About the Instructor</h2>
        
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:w-1/3 p-6">
            <div className="relative w-48 h-48 mx-auto md:w-full md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Punita Parekh"
                className="rounded-full md:rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="md:w-2/3 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
              <h3 className="text-2xl font-bold text-nibp-blue">Punita Parekh</h3>
              <span className="bg-nibp-blue/10 text-nibp-blue text-sm px-3 py-1 rounded-full ml-0 md:ml-4 mt-2 md:mt-0">
                Content Marketer & Mentor
              </span>
            </div>
            
            <div className="space-y-3 text-gray-600">
              <p>
                Punita believes in humanity and helping others. She is an optimist who believes in a bright future 
                and our ability to build it together. Her purpose is to inspire people to do what inspires them 
                so that, together, each of us can change our world for the better.
              </p>
              <p>
                She is a go-getter and a hands-on doer at heart, always believing in Hustling in Life. She loves 
                mentoring people who are passionate about their work and believes in uplifting their lives.
              </p>
              <p>
                With over two decades of expertise in Broadcast Media and Content Marketing, Punita specializes 
                in Storytelling for brands and curating customized & Integrated Solutions across various sectors.
              </p>
              <p>
                After quitting her 9-5 job at the peak of the 2020 lockdown, she now works as an Independent 
                Content Marketer helping brands on LinkedIn build their personal brand with the "Power of Content".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
