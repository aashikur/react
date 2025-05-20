import React, { use , useState} from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => { 
    const {createUser, setUser, updateUser} = use(AuthContext); // useAuth is a custom hook that uses AuthContext to get the createUser function
    const [error, setError] = useState('');
    const [nameError, setNameError] = useState(''); 
    const navigate = useNavigate();

    const handleRegisterForm = (e) => { 

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        


        if(name.length < 5) {
            setNameError('Name must be at least 5 characters long.');
            return;
        } else {
            setNameError('');
        }

        console.log(name, image, email, password); 


        // Create a New user -------------------------------------
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // Update user ------
                updateUser({displayName: name, photoURL: image})
                .then(() => {
                     setUser({...result.user, displayName: name, photoURL: image})
                }) 
                .catch ((error) => {
                     console.log(error);
                     setUser(result.user);
                })
                // Update user ------()

                
                setUser(result.user); 
                navigate('/');

            })
            .catch (error => {{
                console.log(error.message); 
                setError(error.message);

            }}) 
        // Create a New user -----------------------------------End

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
                                {
                                    nameError && <p className='text-red-600'>{nameError}</p>
                                }

                            <label className="label">Image URL</label>
                            <input type="text" name='image' className="input" placeholder="Image URL" />
                            
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                             {
                                error && <p className='text-red-600'>{error}</p>
                             }
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
