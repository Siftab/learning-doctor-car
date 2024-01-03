import React, { useContext } from 'react';
import img from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/Providers/Authprovider';

const SignUp = () => {
const {createUser ,user}=useContext(AuthContext)
    const handleSignUp=(e)=>{
        e.preventDefault();
        // console.log('sub,mit working')
        const form =e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password = form.password.value;

        console.log(name,email,password,user)
        // form.reset();
        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(err=>console.log(err))
    }
    return (
        <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left w-1/2 mr-8">
            <img src={img} alt="" />            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center pt-14">Sign Up</h1>
            <form className="card-body" onSubmit={handleSignUp}> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
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

            <p className='text-center'>have a account <Link to='/login'><span className='text-orange-500'>login</span></Link></p>
          </div>
        </div>
      </div>
    );
};
export default SignUp;