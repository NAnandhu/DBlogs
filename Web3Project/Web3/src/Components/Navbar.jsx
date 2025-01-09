
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ethers} from 'ethers';
// import BlogABI from '../assets/Blogs.json';
// import BAddress from '../assets/deployed_addresses.json';
import logo from '../assets/image/logot.png'
const Navbar = () => {
  
  const navigate=useNavigate('');

  async function connectMetemask(){
    const provider= new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log(signer.address);
 if(signer){
         navigate('/Home')
         alert(`${signer.address} is successfully logged in`)   
    }
    else{
      alert('Connection Failed Try Again Later')
    }
  }
  return (
    <>
      <div>
        <nav className="bg-green-700 w-full h-20 flex items-center">
          <ul className="flex w-full justify-between px-4 items-center">
           <li>
            <img src={logo} alt=""className='w-14 h-14' />
           </li>
            {/* <li className="flex space-x-4">
              <Link to="/Addblogs" className="text-white hover:underline text-xl">
                Post Blogs
              </Link>
              <Link to="/Viewblogs" className="text-white hover:underline text-xl">
                View Blogs
              </Link>
            </li> */}
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
