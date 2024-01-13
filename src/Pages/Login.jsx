import React, { useContext } from 'react';
import img from '../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Providers/Authprovider';
import axios from 'axios';

const Login = () => {
  const {user,
    signIn} =useContext(AuthContext);
    const location = useLocation()
    const navigate=useNavigate();
    console.log(location)
    const handleLogin=(e)=>{
        e.preventDefault();
        // console.log('sub,mit working')
        const form =e.target;
        const email= form.email.value;
        const password = form.password.value;
        const newUser={email}
        console.log(email,password,user)
        signIn(email,password)
        .then(res=>{
          console.log(res.user)
            // navigate(location?.state ? location.state : "/")
            axios.post("http://localhost:5000/jwt",newUser,{
              withCredentials:true
            })
            .then(res=>{console.log(res.data)
                              if(res.data.success){
                                navigate(location?.state ? location.state : "/")
                              }})

        })
        .catch(err=>console.log(err))
        // form.reset();
    }
    return (
        <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left w-1/2 mr-8">
            <img src={img} alt="" />            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center pt-14">Login</h1>
            <form className="card-body" onSubmit={handleLogin}> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary" >Login</button>
              </div>
            </form>

            <p className='text-center'>new to page <Link to='/signUp'><span className='text-orange-500'>SignUp</span></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;