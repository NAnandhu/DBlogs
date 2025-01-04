import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Index from './Pages/Index.jsx';
import AddBlog from './Pages/AddBlog.jsx';
import ViewBlogs from './Pages/ViewBlogs.jsx';
import Home from './Pages/Home.jsx'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>  
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Addblogs" element={<AddBlog />} />
        <Route path="/Viewblogs" element={<ViewBlogs />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
