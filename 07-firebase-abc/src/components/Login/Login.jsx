import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';

const Login = () => { 
    const signInWithGoogle = () => {
        console.log('Sign in with Google clicked'); 
        // const provider = new GoogleAuthProvider();
        const provider = new GoogleAuthProvider();
    }
    return (
        <div className='container text-center py-10'>
            <button onClick={() => signInWithGoogle()} className='bg-blue-500 text-white px-4 py-2  cursor-pointer'>Sign in with Google</button>
        </div>
    );
};

export default Login;