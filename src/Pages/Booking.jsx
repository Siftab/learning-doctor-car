import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/Providers/Authprovider';

const Booking = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    const url =`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setBookings(data))

    },[url])

    return (
        <div>
            this is booking sectiosn{bookings.length}
            
        </div>
    );
};

export default Booking;
