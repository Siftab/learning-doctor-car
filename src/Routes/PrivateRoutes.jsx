import {  useContext } from 'react';
import { AuthContext } from '../components/Providers/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    
    if(loading){
        return <div className='h-screen max-w-6xl flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    }
 return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoutes;