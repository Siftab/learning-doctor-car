import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './Providers/Authprovider';

const CheckOut = () => {
    const {title,price}= useLoaderData();
    const {user}=useContext(AuthContext);
    // console.log(user)
    // const {email,displayName}=user;
    const handleSubmit=e=>{
        e.preventDefault();
        const form =e.target
        const name=form.name.value
        const date=form.date.value
        const email=form.email.value
        const price=form.price.value
        const note=form.note.value
       const order={UserName:name,date,price,email,note}
       console.log(order)
       fetch('http://localhost:5000/bookings'
       ,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(order)

       })
       .then(res=>res.json())
       .then(data=>console.log(data))
       form.reset();
    }

    return (
        <div> 
            <p>Service Name: {title}</p>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6' onSubmit={handleSubmit}>
           <div> <label htmlFor='name'><p>name</p></label>
            <input    className='border p-3 w-full' type="text" name="name" id="name" defaultValue={user?.displayName} required/></div>
           <div> <label><p>Date</p></label>
            <input    className='border p-3 w-full' type="date" name="date" id="" /></div>
           <div>
           <label><p>Email</p></label>
            <input    className='border p-3 w-full' type="email" defaultValue={user?.email} name="email" id="" />
           </div>
           <div> <label><p>Price</p></label>
            <input    className='border p-3 w-full' type="text" defaultValue={price +' $'} name="price" id="" /></div>
            <textarea className='border col-span-2 resize-none h-52' name="note" id="" ></textarea>
            <button className='p-3 bg-orange-500 w-full md:col-span-2'>Submit</button>
            
            
        </form>
        </div>
    );
};


export default CheckOut;