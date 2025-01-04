// import React, { useState } from 'react'
// import Bg from '../assets/image/BG.jpg';
// import BlogABI from '../assets/Blogs.json';
// import BAddress from '../assets/deployed_addresses.json';
// import {ethers} from 'ethers';


// const AddBlog = () => {

//   const [formdata,setData]=useState({
//     id:1,
//     BlogName:'',
//     Cateogry:'',
//     Location:'',
//     Date:'',
//     Blog:''

//   })

//   async function handleSubmit(event){
//     event.preventDefault()
//     const provider= new ethers.BrowserProvider(window.ethereum);    
//     const signer = await provider.getSigner();
//     const cAbi=BlogABI.abi;
//     const cAddress=BAddress['BlogModule#Blogs'];
//     console.log(cAddress);
//     const BlogInstance= new ethers.Contract(cAddress,cAbi,signer)
//     console.log(BlogInstance);
//     const txnRecepit= await BlogInstance.AddBlogs(
//       formdata.id,
//       formdata.BlogName,
//       formdata.Cateogry,
//       formdata.Location,
//       formdata.Blog
//     )
//     console.log(txnRecepit);
    
//   }

//   return (
// <>
// <div
//  style={{
//     width: '100%',
//     height: '750px',
//     backgroundImage: `linear-gradient(to top, black, transparent), url(${Bg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }} >
//    <div className="bg-white w-[550px] h-auto m-auto shadow-xl shadow-black rounded p-6">
//   <h1 className="text-2xl text-black text-center mb-4">Add Blogs</h1>
//   <form className="space-y-4" onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="blogName" className="block text-black text-lg mb-2">
//         Blog Name:
//       </label>
//       <input
//         type="text"
//         id="blogName"
//         className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
//       />
//     </div>
//     <div>
//       <label htmlFor="category" className="block text-black text-lg mb-2">
//         Category:
//       </label>
//       <input
//         type="text"
//         id="category"
//         className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
//       />
//     </div>
//     <div>
//       <label htmlFor="category" className="block text-black text-lg mb-2">
//         Location:
//       </label>
//       <input
//         type="text"
//         id="location"
//         className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
//       />
//     </div>
//     <div>
//       <label htmlFor="date" className="block text-black text-lg mb-2">
//         Date:
//       </label>
//       <input
//         type="date"
//         id="date"
//         className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
//       />
//     </div>
//     <div>
//       <label htmlFor="blogs" className="block text-black text-lg mb-2">
//         Blogs:
//       </label>
//       <textarea
//         id="blogs"
//         rows="6"
//         className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
//       ></textarea>
//     </div>
//     <button
//       type="submit"
//       className="bg-green-600 text-white  w-48 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
//       Submit
//     </button>
//   </form>
// </div>

// </div>

// </>  )
// }

// export default AddBlog
import React, { useState } from 'react';
import Bg from '../assets/image/BG.jpg';
import BlogABI from '../assets/Blogs.json';
import BAddress from '../assets/deployed_addresses.json';
import { ethers } from 'ethers';

const AddBlog = () => {

  // Initialize state variables for each input field
  // const [id] = useState(0);
  const [blogName, setBlogName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [blogContent, setBlogContent] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const cAbi = BlogABI.abi;
    const cAddress = BAddress['BlogModule#Blogs'];
    console.log(cAddress);
    const BlogInstance = new ethers.Contract(cAddress, cAbi, signer);
    console.log(BlogInstance);
    const txnRecepit = await BlogInstance.AddBlogs(
      
      blogName,
      category,
      location,
      date,
      blogContent
    );
    console.log(txnRecepit);
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '750px',
          backgroundImage: `linear-gradient(to top, black, transparent), url(${Bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="bg-white w-[550px] h-auto m-auto shadow-xl shadow-black rounded p-6">
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
              <label htmlFor="category" className="block text-black text-lg mb-2">
                Category:
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-black text-lg mb-2">
                Location:
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border-2 border-black rounded p-2 hover:border-green-600 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-black text-lg mb-2">
                Date:
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
