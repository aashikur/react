import React, { use } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => { 
    
    const {SignInUser} = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password); 

        SignInUser(email, password).then(alert('Login in Success.')).catch(error => {console.log(error.message)})
    }
    return (
        <div>
            <div className="hero bg-base-200  py-10">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body"> 
                    <h1 className='text-3xl'>Login to Your Account</h1>

                            <form onSubmit={handleLogin} className="fieldset"> 
                                {/* Email  */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />

                                {/* password  */}
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Login</button> 
                               <p className='text-lg'>
                               Don't have an account? <Link to="/auth/register" className="link link-hover to-blue-600 underline font-bold">Register</Link>
                               </p>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;