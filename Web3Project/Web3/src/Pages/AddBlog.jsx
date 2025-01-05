import React, { useState } from 'react';
import Bg from '../assets/image/BG.jpg';
import BlogABI from '../assets/Blogs.json';
import BAddress from '../assets/deployed_addresses.json';
import { ethers } from 'ethers';
import {useNavigate} from 'react-router-dom'

const AddBlog = () => {
  const [blogName, setBlogName] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const navigate=useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const cAbi = BlogABI.abi;
    const cAddress = BAddress['BlogModule#Blogs'];
    const BlogInstance = new ethers.Contract(cAddress, cAbi, signer);
    const txnRecepit = await BlogInstance.AddBlogs(blogName, blogContent);
    console.log(txnRecepit);
    if(txnRecepit){
      navigate('/Viewblogs')
    }
    
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `linear-gradient(to top, black, transparent), url(${Bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="bg-white w-[550px] h-auto shadow-xl shadow-black rounded p-6">
          <h1 className="text-2xl text-black text-center mb-4">Add Blogs</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="blogName" className="block text-black text-lg mb-2">
                Blog Name:
              </label>
              <input
                type="text"
                id="blogName"
                value={blogName}
                onChange={(e) => setBlogName(e.target.value)}
                className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            <div>
              <label htmlFor="blogs" className="block text-black text-lg mb-2">
                Blogs:
              </label>
              <textarea
                id="blogs"
                rows="6"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white  w-48 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
