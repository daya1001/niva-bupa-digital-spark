
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-nibp-blue transition-colors">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-nibp-blue transition-colors">About</Link>
          <Link to="/courses" className="text-gray-700 hover:text-nibp-blue transition-colors">Courses</Link>
          <Link to="/contact" className="text-gray-700 hover:text-nibp-blue transition-colors">Contact</Link>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-nibp-blue hover:bg-nibp-lightblue text-white px-6"
          >
            <Link to="/login">Login</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-nibp-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-nibp-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-nibp-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-nibp-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-nibp-blue hover:bg-nibp-lightblue text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
