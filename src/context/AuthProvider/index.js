import React, { createContext, useState, useEffect } from 'react';
import { LoginRequest, setUserLocalStorage, getUserLocalStorage } from './utils';

export const AuthContext = createContext({})

export const AuthProvider = ({children})=> {
    const [user, setUser] = useState();

    useEffect(()=>{
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
    },[])


    async function authenticate(email, password){
        const response = await LoginRequest(email, password)

        const payload = {token: response.token, email}

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout(){
        setUser(null);
        setUserLocalStorage(null);
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}