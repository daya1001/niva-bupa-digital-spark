
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Award, 
  UserCircle, 
  MessageSquare,
  BarChart, 
  ChevronRight,
  X
} from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DashboardSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      onClose();
    }
  }, [location.pathname, onClose]);
  
  // Close sidebar on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  // Handle sidebar overlay clicks
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={handleOverlayClick}
        >
          <div 
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold text-lg">Menu</h2>
              <button onClick={onClose}>
                <X size={20} />
              </button>
            </div>
            <SidebarContent />
          </div>
        </div>
      )}
      
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r h-screen sticky top-0 pt-20">
        <SidebarContent />
      </aside>
    </>
  );
};

const SidebarContent = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="py-4">
      <nav className="space-y-1 px-2">
        <SidebarLink 
          to="/dashboard"
          icon={<Home size={18} />}
          text="Home"
          active={isActive('/dashboard') && location.pathname === '/dashboard'}
        />
        <SidebarLink 
          to="/dashboard/courses"
          icon={<BookOpen size={18} />}
          text="Courses"
          active={isActive('/dashboard/courses')}
        />
        <SidebarLink 
          to="/dashboard/progress"
          icon={<BarChart size={18} />}
          text="My Progress"
          active={isActive('/dashboard/progress')}
        />
        <SidebarLink 
          to="/dashboard/achievements"
          icon={<Award size={18} />}
          text="Achievements"
          active={isActive('/dashboard/achievements')}
        />
        <SidebarLink 
          to="/dashboard/qa-sessions"
          icon={<MessageSquare size={18} />}
          text="Live Q&A"
          active={isActive('/dashboard/qa-sessions')}
        />
        <SidebarLink 
          to="/dashboard/profile"
          icon={<UserCircle size={18} />}
          text="Profile"
          active={isActive('/dashboard/profile')}
        />
      </nav>
      
      <div className="px-4 mt-8">
        <div className="bg-nibp-blue/10 rounded-lg p-4">
          <h3 className="font-medium mb-2 text-nibp-blue">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Contact our support team for assistance with any issues.
          </p>
          <Link 
            to="/dashboard/support"
            className="text-sm flex items-center text-nibp-blue hover:underline"
          >
            Contact Support <ChevronRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

type SidebarLinkProps = {
  to: string;
  icon: React.ReactNode;
  text: string;
  active: boolean;
};

const SidebarLink = ({ to, icon, text, active }: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-md transition-colors ${
        active
          ? 'bg-nibp-blue text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default DashboardSidebar;
