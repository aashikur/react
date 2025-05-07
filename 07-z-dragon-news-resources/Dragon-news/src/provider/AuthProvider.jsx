import React, { createContext } from 'react';
export const AuthContext = createContext(); // CONTEXT 
const AuthProvider = () => {
    const [user, setUser] = React.useState({
        email: 'ashik@gmail.com',
        password: '123456'
    }); 

    const authData = {
        user,
        setUser,
    }

    return <AuthContext value="authData"></AuthContext>
};

export default AuthProvider;