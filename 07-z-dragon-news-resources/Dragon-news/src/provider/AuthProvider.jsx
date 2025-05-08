import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(); // CONTEXT 
import app from '../firebase/firebase.config'
import { getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = useState(true);


    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const LogOutUser = () => {
        return signOut(auth);
    }
    
    
    // console.log(loading, user); 


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
            setUser(Currentuser);
            setLoading(false);
        })
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [])


    const authData = {
        user,
        setUser,
        createUser,
        LogOutUser,
        SignInUser,
        loading,
        updateUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;