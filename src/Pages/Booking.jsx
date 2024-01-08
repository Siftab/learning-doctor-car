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
    const handleDelete=id=>{
      const proceed =confirm(`sure delete${id}`)
      if(proceed){
       console.log('working')
       fetch(`http://localhost:5000/bookings/${id}`,{
         method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=> {
         console.log(data)
       if(data?.deletedCount>0){
        const remainings = bookings.filter(booking=> booking._id !==id)
        setBookings(remainings)
       }
       })
      }
   
     }
     const handleConfirm=id=>{
      fetch(`http://localhost:5000/bookings/${id}`,{
         method:"PATCH",
         headers:{
          "content-type":"application/json"
         },
         body:JSON.stringify({status:"confirmed"})
       })
       .then(res=>res.json())
       .then(data=> {
        console.log(data)
        if(data.modifiedCount>0){
          const remainings= bookings.filter(booking=> booking._id !== id)
          const updated= bookings.find(booking=> booking._id===id);
          updated.status="confirmed"
          const newUpdate= [updated,...remainings]
          setBookings(newUpdate)
        }
       })
     }

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
        bookings.map((booking,idx)=><TableRow key={idx} props={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></TableRow>)
     }
     
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default Booking;
