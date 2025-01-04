
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
 

  return (
    <>
      <div>
        <nav className="bg-green-800 w-full h-20 flex items-center">
          <ul className="flex w-full justify-between px-4 items-center">
            {/* Navigation Links */}
            <li className="flex space-x-4">
              <Link to="/Addblogs" className="text-white hover:underline text-xl">
                Post Blogs
              </Link>
              <Link to="/Viewblogs" className="text-white hover:underline text-xl">
                View Blogs
              </Link>
            </li>
           
          </ul>
        </nav>
        <div className="p-4">
          {/* <p>{Output}</p> */}
        </div>
      </div>
    </>
  );
};

export default Navbar1;

