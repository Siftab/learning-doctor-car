import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/Providers/Authprovider';
import TableRow from '../components/TableRow';

const Booking = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    const url =`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setBookings(data))

    },[url])
    console.log(user)

    return (
        <div>
            this is booking sectiosn{bookings.length}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookings.map((booking,idx)=><TableRow key={idx} props={booking}></TableRow>)
     }
     
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default Booking;
