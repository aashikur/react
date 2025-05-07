import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> 
                    <div className="card-body"> 
                        <h1 className='text-3xl'>Register A Account</h1>
                        <form className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />
                            
                            <label className="label">Image URL</label>
                            <input type="text" className="input" placeholder="Image URL" />
                            
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            
                            <button className="btn btn-neutral mt-4">Register</button> 
                            
                            <p className='text-lg'>
                                Already have an account? <Link to="/auth/login" className="link link-hover to-blue-600 underline font-bold">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
