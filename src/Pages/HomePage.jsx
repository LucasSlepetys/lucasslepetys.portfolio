import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const openCloseSideBar = () => {
    setIsSideOpen(!isSideOpen);
  };

  return (
    <>
      <Helmet>
        <title>Lucas's Portfolio</title>
        <meta name='description' content='Lucas Slepetys Portfolio' />
        <link rel='canonical' href='' />
      </Helmet>
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
