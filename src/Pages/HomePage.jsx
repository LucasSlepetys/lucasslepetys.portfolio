import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const openCloseSideBar = () => {
    setIsSideOpen(!isSideOpen);
  };

  return (
    <>
      <NavBar openCloseSideBar={openCloseSideBar} />
      <SideBar isSideOpen={isSideOpen} openCloseSideBar={openCloseSideBar} />
      <div className='content'>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
