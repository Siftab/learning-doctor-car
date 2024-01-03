import  { createContext, useEffect, useState } from 'react';
import auth from '../../../fireBase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading ]=useState(true);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)

    })
    return ()=>unSubscribe();
},[])

    const authInfo={
            user,
            loading,
            createUser,
            signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;
