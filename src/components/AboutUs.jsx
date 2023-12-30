import React from 'react';
import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center  my-8 border '>
            <div className=' md:w-1/2 relative mr-16 '>
                <img src={person} className="w-3/4 " alt="" />
                <img src={parts} className='w-1/2 border-8 border-white rounded-lg absolute right-10 top-1/2' alt="" />
            </div>
            <div className=' md:w-1/2'>
               <div className="w-2/3 space-y-7"> <p className='text-[#FF3811] font-semibold text-xl'>About Us</p>
                <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='bg-[#FF3811] btn text-white'>get more info</button></div>
            </div>
            
        </div>
    );
};

export default AboutUs;