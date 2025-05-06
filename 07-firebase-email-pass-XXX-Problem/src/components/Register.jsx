import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../layout/FireBase.init';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setEmail(e.target.email.value)
        setPassword(e.target.password.value)
        console.log({ email, password });

        // Create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log('User registered:', user); // Added logging for user registration
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // Handle error appropriately (e.g., show a message to the user)
            });




    };

    return (
        <div className='container'>
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Register</h1>
                            <form onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;