// import React,{useState} from 'react';
// import Girid from '../Components/Girid.jsx';
// import Bg from '../assets/image/BG.jpg';
// import Typewriter from 'react-typewriter-effect';
// import Navbar1 from '../Components/Navbar1.jsx';
// import { ethers } from 'ethers';
// import BlogABI from '../assets/Blogs.json';
// import BAddress from '../assets/deployed_addresses.json';
// import { useNavigate } from 'react-router-dom';



// const Index = () => {
//     const [Output, SetOutput] = useState(''); // State for output
//     const navigate = useNavigate(); // Hook for navigation
  
//     async function getCertificate() {
//       try {
//         const id = document.getElementById('Search').value; // Get input value
//         console.log(id);
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const cAbi = BlogABI.abi;
//         const cAddress = BAddress['BlogModule#Blogs'];
//         console.log(cAddress);
//         const BlogInstance = new ethers.Contract(cAddress, cAbi, signer);
//         console.log(BlogInstance);
  
//         // Interact with the contract
//         const txtvalue = await BlogInstance.BlogDetails(id);
//         console.log(txtvalue);
  
//         // Update the state with the fetched details
//         SetOutput(
//           `Name: ${txtvalue[0]}, Course: ${txtvalue[1]}, Grade: ${txtvalue[2]}, Date: ${txtvalue[3]}`
//         );
//       } catch (error) {
//         console.error('Error fetching certificate details:', error);
//         SetOutput('Error fetching details. Please try again.');
//       }
//     }
//   return (
//     <>
//      <Navbar1 />
//       <body
//         // style={{
//         //   width: '100%',
//         //   height: '700px',
//         //   backgroundImage: `linear-gradient(to top, black, transparent), url(${Bg})`,
//         //   backgroundSize: 'cover',
//         //   backgroundPosition: 'center',
//         // }}
//       >
//         <div className="">
//       <li className="flex items-center space-x-2 ml-[450px]">
//               <input
//                 id="Search"
//                 type="text"
//                 className="w-52 p-2 rounded-md"
//                 placeholder="Search"
//               />
//               <button
//                 className="bg-gray-200 p-2 rounded border-2 border-black hover:border-white h-12 w-28 text-black"
//                 onClick={getCertificate}>
//                 Search
//               </button>
//             </li>       
//       </div>
//         <h1 className='text-white text-3xl pt-[300px]'>
//           <Typewriter
//             textStyle={{
//               fontWeight: 700,
//               fontSize: '36px',
//               textAlign: 'center', // Fixed text-align to textAlign
//             }}
//             // startDelay={1000}
//             // cursorColor="white"
//             // multiText={['Add Blogs', 'View Blogs']}
//             // multiTextDelay={1000}
//             // typeSpeed={100}
//             // backSpeed={50}
//             // backDelay={500}
//             // loop
//           />
//         </h1>
//         <div>
//             <h1>{Output}</h1>
//         </div>

//       </body>
      
//     </>
//   );
// };
// export default Index;
import React, { useState } from 'react';
import Girid from '../Components/Girid.jsx';
import Bg from '../assets/image/BG.jpg';
import Typewriter from 'react-typewriter-effect';
import Navbar1 from '../Components/Navbar1.jsx';
import { ethers } from 'ethers';
import BlogABI from '../assets/Blogs.json';
import BAddress from '../assets/deployed_addresses.json';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [Output, SetOutput] = useState(null); // State as an object
  const navigate = useNavigate(); // Hook for navigation

  async function getCertificate() {
    try {
      const id = document.getElementById('Search').value; // Get input value
      console.log(id);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const cAbi = BlogABI.abi;
      const cAddress = BAddress['BlogModule#Blogs'];
      console.log(cAddress);
      const BlogInstance = new ethers.Contract(cAddress, cAbi, signer);
      console.log(BlogInstance);

      // Interact with the contract
      const txtvalue = await BlogInstance.BlogDetails(id);
      console.log(txtvalue);

      // Update the state as an object
      SetOutput({
        BlogName: txtvalue[0],  // Name
        Date: txtvalue[1],      // Date
        Category: txtvalue[2],  // Category
        Location: txtvalue[3],  // Location
        Blog: txtvalue[4],      // Blog
      });
      
    } catch (error) {
      console.error('Error fetching certificate details:', error);
      SetOutput(null); // Clear output on error
    }
  }

  return (
    <>
      <Navbar1 />
      <body>
        <div className="">
          <li className="flex items-center space-x-2 ml-[450px]">
            <input
              id="Search"
              type="text"
              className="w-52 p-2 rounded-md"
              placeholder="Search"
            />
            <button
              className="bg-gray-200 p-2 rounded border-2 border-black hover:border-white h-12 w-28 text-black"
              onClick={getCertificate}
            >
              Search
            </button>
          </li>
        </div>
        {/* <h1 className="text-white text-3xl pt-[300px]">
          <Typewriter
            textStyle={{
              fontWeight: 700,
              fontSize: '36px',
              textAlign: 'center',
            }}
          />
        </h1> */}
        <div>
        {Output ? (
  <>
    {/* <h1>Name: {Output.BlogName}</h1> */}
    {/* <h1>Date: {Output.Date}</h1>
    {Output.Category && <h1>Category: {Output.Category}</h1>}
    {Output.Location && <h1>Location: {Output.Location}</h1>}
    {Output.Blog && <h1>Blog: {Output.Blog}</h1>} */}
    <div className='w-[600px]  m-auto h-auto rounded border-2 border-black mt-12 shadow-lg shadow-black'>
        <h1 className='text-center text-xl text-black m-3'>Title :{Output.BlogName} </h1>
        <p className=' p-5 '>{Output.Blog}</p>
        <p className=' p-5'>{Output.Location}</p>
        <p className=' p-5'>{Output.Category}</p>
        <p className=' p-5'>{Output.Date}</p>    
        </div>
    
  </>
) : (
  <h1>No data available or error occurred</h1>
)}

        </div>
      </body>
    </>
  );
};
export default Index;

