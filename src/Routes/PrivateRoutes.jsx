import {  useContext } from 'react';
import { AuthContext } from '../components/Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className='h-screen max-w-6xl flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    }
 return <Navigate to={"/login"} state={location.pathname}></Navigate>
};

export default PrivateRoutes;