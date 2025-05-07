import React, { createContext, useEffect } from 'react';
export const AuthContext = createContext(); // CONTEXT 
import  app from '../firebase/firebase.config'
import { getAuth, onAuthStateChanged , signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";



const auth = getAuth(app); 

const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
} 

const SignInUser = (email,password) => {
    return signInWithEmailAndPassword (auth, email, password)
}

const LogOutUser = () => {
    return signOut(auth);
}

// useEffect(()=>{
//       const unsubscribe =  onAuthStateChanged(auth, (Currentuser) => {
//             setUser(Currentuser);
//         })

        
// },[])

const AuthProvider = ({children}) => {
    const [user, setUser] = React.useState(null); 
    console.log(user);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
            setUser(Currentuser);
        }) 
        return () => unsubscribe(); // Cleanup subscription on unmount
       },[])


    const authData = {
        user,
        setUser,
        createUser,
        LogOutUser,
        SignInUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;