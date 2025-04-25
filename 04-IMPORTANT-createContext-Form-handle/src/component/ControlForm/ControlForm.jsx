import React, { useState } from 'react';

const ControlForm = () => {
    const [thePass, setThePass] = useState('pwd1234')
    const [error, setError] = useState('')

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log('Submitted the Form')
    } 

    const handleChange = e => {
        console.log(e.target.value)
        setThePass(e.target.value)



        if(e.target.value.length < 6) {
            setError('Password Must 6 Digtis*')
        } else {
            setError('')

        }

        
    }
    
    return (
        <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
                defaultValue={'Ashik'}
                required
                
            />
            <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded" 
                defaultValue={'a@g.com'}
                required
                
            /> 
            
            <input
                type="text"
                placeholder="Password"
                className="border p-2 rounded" 
                defaultValue={thePass} 
                onChange={handleChange}
                required
                
            /> 

            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form> 
        <p className='text-red-500 text-center'>{error}</p>
        </div>
    );
};

export default ControlForm;