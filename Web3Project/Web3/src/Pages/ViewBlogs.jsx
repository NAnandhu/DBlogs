import React, { useState, useEffect } from 'react';
import BlogABI from '../assets/Blogs.json';
import BAddress from '../assets/deployed_addresses.json';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

const ViewBlogs = () => {
  const [OutAll, setAll] = useState([]);
  const navigate = useNavigate();

  function handleReadMore(blog) {
    navigate('/Readmore', { state: { blog: { ...blog } } });
  }

  useEffect(() => {
    ViewAll();
  }, []);

  async function ViewAll() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const cAbi = BlogABI.abi;
      const cAddress = BAddress['BlogModule#Blogs'];

      console.log(cAddress);

      const BlogInstance = new ethers.Contract(cAddress, cAbi, signer);
      const AllBlogs = await BlogInstance.GetAllBlogs();
      console.log(AllBlogs);

      setAll(AllBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OutAll.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-md rounded-lg p-5 bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {blog.BlogName || 'Untitled Blog'}
            </h2>
            <p className="text-gray-700">
              {blog.Content
                ? blog.Content.slice(0, 100) + (blog.Content.length > 100 ? '...' : '')
                : 'No description available.'}
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Author: {blog.Author || 'Unknown'}
            </p>
            <button
              onClick={() => handleReadMore(blog)}
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlogs;
