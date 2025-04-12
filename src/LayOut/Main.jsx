import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber/Navber';
import Footer from '../pages/Shared/Footer/Footer';
import AboutNav from '../pages/Shared/AboutNav/AboutNav';

const Main = () => {
  return (
    <div>
     
        <Outlet></Outlet>
       
    </div>
  );
};

export default Main;