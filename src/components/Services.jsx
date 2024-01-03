import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div>
         <div className='text-center max-w-3xl mx-auto space-y-10'>
            <p className='text-[#FF3811] font-bold text-xl'>Service</p>
            <h1 className='text-5xl font-bold '>Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
         <div>
            <p>
                services{services.length}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {
                    services.map(service=><ServicesCard
                    key={service._id}
                    props={service}></ServicesCard>)
                }
                </div>
            </p>
         </div>
        </div>
    );
};

export default Services;