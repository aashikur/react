import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => { 
    const {createUser, setUser} = use(AuthContext); // useAuth is a custom hook that uses AuthContext to get the createUser function
    const handleRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(name, image, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user); 

            })
            .catch (error => {{
                console.log(error.message);

            }}) 
    };
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> 
                    <div className="card-body"> 
                        <h1 className='text-3xl'>Register A Account</h1>
                        <form onSubmit={handleRegisterForm} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            
                            <label className="label">Image URL</label>
                            <input type="text" name='image' className="input" placeholder="Image URL" />
                            
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            
                            <button type='submit' className="btn btn-neutral mt-4">Register</button> 
                            
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
