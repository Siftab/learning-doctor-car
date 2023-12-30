import React from 'react';
import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import img6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='h-full w-1/2  absolute z-10 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white'>
                <div className='space-y-7 ml-24'>
                <h1 className='text-5xl'>Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className='btn bg-red-500 text-whit mr-4 border-none text-white'>Dsicover More</button><button className='btn btn-outline text-red-500'> latest Project</button>
                </div>
            </div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-3 ">
                        <div>

                        </div>
                        
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-3 ">
                        <a href="#slide4" className="btn btn-circle hover:bg-red-500 hover:text-white ">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-red-500 hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-3">
                        <a href="#slide1" className="btn btn-circle hover:bg-red-500 hover:text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-red-500 hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-3">
                        <a href="#slide2" className="btn btn-circle hover:bg-red-500 hover:text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-red-500 hover:text-white">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-3">
                        <a href="#slide3" className="btn btn-circle hover:bg-red-500 hover:text-white">❮</a>
                        <a href="#slide5" className="btn btn-circle hover:bg-red-500 hover:text-white">❯</a>
                    </div>
                </div>
            
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-3">
                    <a href="#slide4" className="btn btn-circle hover:bg-red-500 hover:text-white">❮</a>
                    <a href="#slide6" className="btn btn-circle hover:bg-red-500 hover:text-white">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                            <img src={img6} className="w-full" />
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-3">
                                <a href="#slide5" className="btn btn-circle hover:bg-red-500 hover:text-white">❮</a>
                                <a href="#slide1" className="btn btn-circle hover:bg-red-500 hover:text-white">❯</a>
                            </div>
                        </div>

                        </div></div>
                );
};

                export default Banner;