
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="text-xl font-bold text-nibp-blue">
        <span>NIVA BUPA</span>
        <span className="text-nibp-orange ml-2 font-normal">Digital Academy</span>
      </div>
    </Link>
  );
};

export default Logo;
