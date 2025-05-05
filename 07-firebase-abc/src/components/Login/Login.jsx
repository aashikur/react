import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../../Firebase/firebase.init';
import { useState } from 'react';


const Login = () => {

    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        // ABC2
        //     const provider = new GoogleAuthProvider();
        //     signInWithPopup(auth, provider).then((result) => { console.log(result.user.email); }).catch((error) => {
        //         console.error('Error signing in with Google:', error);
        //     });


        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user.email);
                setUser(result.user); // Set the user state with the signed-in user's information
            })
            .catch(error => console.error('Error signing in with Google:', error));

    }

    const signOutWithGoogle = () => {
        signOut(auth).then(() => {
            console.log('User signed out successfully');
            setUser(null); // Clear the user state on sign-out
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    }

    return (
        <div className='container text-center py-10'>


            {
                !user ? 
                <button onClick={signInWithGoogle} className='bg-blue-500 text-white px-4 py-2 cursor-pointer'>
                Sign in with Google
            </button>
                :
                <button onClick={signOutWithGoogle} className='bg-blue-500 border text-white px-4 py-2 cursor-pointer'>
                Sign Out 
            </button> 
                
            }
            {user && (
                <div className='mt-4 p-4 border rounded shadow-lg'>
                    <h2 className='text-xl'>Welcome, {user.displayName}</h2>
                    <p className='text-gray-600'>{user.email}</p>
                    <img src={user.photoURL} alt={user.displayName} className='rounded-full mt-2' width="100" height="100" />
                    <p className='text-gray-600'>User ID: {user.uid}</p>
                    <p className='text-gray-600'>Email Verified: {user.emailVerified ? 'Yes' : 'No'}</p>
                    <p className='text-gray-600'>Phone Number: {user.phoneNumber ? user.phoneNumber : 'N/A'}</p>
                </div>)}
        </div>
    );
};

export default Login;
