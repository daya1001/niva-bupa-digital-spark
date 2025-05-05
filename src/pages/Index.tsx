
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import HeroCarousel from '@/components/hero/HeroCarousel';
import FeaturedVideos from '@/components/hero/FeaturedVideos';
import LoginTabs from '@/components/login/LoginTabs';
import AboutAcademy from '@/components/about/AboutAcademy';
import CourseSnapshot from '@/components/courses/CourseSnapshot';
import BenefitsSection from '@/components/benefits/BenefitsSection';
import ArticlesSection from '@/components/articles/ArticlesSection';
import AdvisorCTA from '@/components/cta/AdvisorCTA';
import InstructorProfile from '@/components/instructor/InstructorProfile';
import Footer from '@/components/footer/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroCarousel />
        <FeaturedVideos />
        <LoginTabs />
        <AboutAcademy />
        <CourseSnapshot />
        <BenefitsSection />
        <InstructorProfile />
        <ArticlesSection />
        <AdvisorCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
