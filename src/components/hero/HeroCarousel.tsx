
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Master Digital Marketing Skills",
    description: "Learn the fundamentals of digital marketing and transform your insurance business.",
    ctaText: "Explore Courses",
    ctaLink: "/login",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  },
  {
    id: 2,
    title: "Build Your Social Media Presence",
    description: "Gain practical skills to engage clients through social media platforms.",
    ctaText: "Get Started",
    ctaLink: "/login",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  },
  {
    id: 3,
    title: "Become a Digital Insurance Expert",
    description: "Learn how to leverage digital tools to grow your insurance business.",
    ctaText: "Join Now",
    ctaLink: "/login",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
            index === currentSlide ? "opacity-100" : "opacity-0 translate-x-full"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 93, 170, 0.7), rgba(0, 93, 170, 0.7)), url(${slide.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <Button size="lg" className="bg-nibp-orange hover:bg-nibp-orange/90 text-white">
                {slide.ctaText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
        onClick={nextSlide}
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
