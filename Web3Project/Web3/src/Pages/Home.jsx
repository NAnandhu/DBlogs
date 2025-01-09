import React, { useState } from "react";
import { ethers } from "ethers";
import BlogABI from "../assets/Blogs.json";
import BAddress from "../assets/deployed_addresses.json";
import { motion } from "framer-motion";
import Bg from '../assets/image/BG.jpg';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [Output, SetOutput] = useState(null);
  const navigate=useNavigate()
  async function getBlogDetails() {
    try {
      const id = document.getElementById("Search").value;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const cAbi = BlogABI.abi;
      const cAddress = BAddress["BlogModule#Blogs"];
      const BlogInstance = new ethers.Contract(cAddress, cAbi, signer);

      const txtvalue = await BlogInstance.BlogDetails(id);

      SetOutput(txtvalue);
      
    } catch (error) {
      console.error("Error fetching blog details:");
      SetOutput(null);
    }
   
  }
  function navigates(){
    navigate('/Viewblogs')
  }
  function Addnavigates(){
    navigate('/Addblogs')
  }
  return (
    <>
      
    <div
      style={{
        width: '100%',
        height: '700px',
        backgroundImage: `linear-gradient(to top, black, transparent), url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>  
        <div>
        <h1 className="   pt-5 text-center text-white font-bold text-2xl italic">Welcome To Home</h1>
        <motion.div
          initial={{ opacity: 0, y: 600 }}
          animate={{ opacity: 5, y: 100 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="rounded-lg flex items-center justify-center text-black text-lg">
          <div className="flex items-center space-x-3">
            <input
              id="Search"
              type="text"
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:font-normal"
              placeholder="Search Blog"/>
            <button
              onClick={getBlogDetails}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Search
            </button>
          </div>
        </motion.div>
          </div>     
        <div className="">
        <motion.div  
          initial={{ opacity: 0, y: 600 }}
          animate={{ opacity: 5, y: 0 }}
          transition={{ duration: 3, ease: "easeOut"}}
          className="w-48 h-28  m-5 hover:bg-gray-200 hover:text-black border-2 border-white rounded text-xl text-center text-white pt-10"onClick={navigates}>ViewBlogs
        </motion.div>
        <motion.div  
          initial={{ opacity: 0, y: 600}}
          animate={{ opacity: 5, y: 0 }}
          transition={{ duration: 3, ease: "easeOut"}}
          className="w-48 h-28  m-5  hover:bg-gray-200 hover:text-black rounded border-2 border-white text-xl text-center text-white pt-10"onClick={Addnavigates}>AddBlogs
        </motion.div>
        </div>
       
        {Output ? (
          <div className="bg-white shadow-lg rounded-lg mt-10 w-full max-w-lg p-6 m-auto ">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              {Output.BlogName}
            </h2>
            <p className="text-gray-700 mt-4">{Output.Content}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Author:</span> {Output.Author}
            </p>
          </div>
        ) : (
          <h1 className="m-auto text-gray-600">No data available or an error occurred</h1>
        )}       
    </div>     
    </>
  );
};

export default Home;
