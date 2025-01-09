import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Readmore = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;
  console.log(blog); 
  if (!blog) {
    return (
      <div className="text-center mt-10">
        <p>No blog data available.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-5">
        <h1 className="text-3xl font-bold text-blue-600 mb-5">{blog[0]  || 'Untitled Blog'}</h1>
        <p className="text-gray-700 mb-3">{blog[2] || 'No content available.'}</p>
        <p className="text-sm text-gray-500">Author: {blog[1] || 'Unknown'}</p>
      </div>
    </div>
    </>
    
  );
};

export default Readmore;
