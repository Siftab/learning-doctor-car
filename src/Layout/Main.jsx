import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Services from '../components/Services';


const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'> 
            <NavBar></NavBar>
            <Outlet></Outlet>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Main;