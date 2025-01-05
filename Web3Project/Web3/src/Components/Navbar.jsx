
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ethers} from 'ethers';
import BlogABI from '../assets/Blogs.json';
import BAddress from '../assets/deployed_addresses.json';

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
  async function getCertificate(){
    // const navigate=useNavigate('')
    // const [Output,SetOutput]=useState('')

    // const id=document.getElementById('Search').value
    // console.log(id);
    // const provider = new ethers.BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();
    // const cAbi = BlogABI.abi;
    // const cAddress = BAddress['BlogModule#Blogs'];
    // console.log(cAddress);
    // const BlogInstance = new ethers.Contract(cAddress, cAbi, signer);
    // console.log(BlogInstance);
    // const txtvalue= await BlogInstance.BlogDetails(id)
    // console.log(txtvalue[0]);
    // SetOutput(`Name:${txtvalue[0]},Course:${txtvalue[1]},Grade:${txtvalue[2]},Date:${txtvalue[3]}`)
    
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
            {/* <li className="flex items-center space-x-2"> */}
              {/* <input
              id='Search'
                type="text"
                className="w-52 p-2 rounded-md"
                placeholder="Search"
              />
              <button className="bg-gray-200 p-2 rounded border-2 border-black hover:border-white h-12 w-28 text-black"
              >
                Search
              </button>
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
