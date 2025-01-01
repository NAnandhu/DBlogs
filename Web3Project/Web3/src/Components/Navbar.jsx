
import React from 'react';
import { Link } from 'react-router-dom';
import {ethers} from 'ethers';

const Navbar = () => {

  async function connectMetemask(){
    const provider= new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log(signer.address);
    alert(`${signer.address} is successfully logged in`)   

  }
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
            <li className="flex items-center space-x-2">
              <input
                type="text"
                className="w-52 p-2 rounded-md"
                placeholder="Search"
              />
              <button className="bg-gray-200 p-2 rounded border-2 border-black hover:border-white h-12 w-28 text-black">
                Search
              </button>
            </li>
            <li>
              <button className="bg-gray-200 p-2 rounded border-2 border-black hover:border-white h-12 text-black"
              onClick={connectMetemask}>
                Connect Metamask
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
