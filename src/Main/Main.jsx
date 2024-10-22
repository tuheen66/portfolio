import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between w-[90%] mx-auto'>
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;