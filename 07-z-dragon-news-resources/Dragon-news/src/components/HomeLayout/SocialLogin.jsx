import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
           <div>
              <h1>Login with: 
              </h1>  <br />
              <div className="flex flex-col gap-2">
                <button className='btn'> <FcGoogle /> Google</button>
                <button className='btn'>Github</button>
              </div>
           </div>
        </div>
    );
};

export default SocialLogin;