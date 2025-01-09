import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Girid from '../Components/Girid.jsx';
import Bg from '../assets/image/BG.jpg';
import Typewriter from 'react-typewriter-effect';

const Index = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: '100%',
          height: '700px',
          backgroundImage: `linear-gradient(to top, black, transparent), url(${Bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className='text-white text-3xl pt-[300px]'>
          <Typewriter
            textStyle={{
              fontWeight: 700,
              fontSize: '36px',
              textAlign: 'center', // Fixed text-align to textAlign
            }}
            startDelay={1000}
            cursorColor="white"
            multiText={['ConnectMetamask', 'Add Blogs', 'View Blogs']}
            multiTextDelay={1000}
            typeSpeed={100}
            backSpeed={50}
            backDelay={500}
            loop
          />
        </h1>
      </div>

      <div className="">
        
       
      </div>
    </>
  );
};

export default Index;
