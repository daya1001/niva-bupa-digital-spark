
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  onMenuToggle: () => void;
};

const DashboardNavbar = ({ onMenuToggle }: Props) => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="text-gray-600 p-2 rounded-md md:hidden"
            onClick={onMenuToggle}
          >
            <Menu size={24} />
          </button>
          
          <Link to="/dashboard" className="flex items-center ml-2 md:ml-0">
            <div className="text-xl font-bold text-nibp-blue">
              <span>NIVA BUPA</span>
              <span className="text-nibp-orange ml-2 font-normal">Digital Academy</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 p-2 rounded-full hover:bg-gray-100">
            <Bell size={20} />
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-nibp-blue">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User size={18} />
                </div>
                <span className="hidden md:inline font-medium">John Doe</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/dashboard/profile" className="w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/dashboard/progress" className="w-full">My Progress</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/dashboard/certificates" className="w-full">My Certificates</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/login" className="w-full">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
