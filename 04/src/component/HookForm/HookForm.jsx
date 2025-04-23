import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => { 
    const [name, nameOnChange] = useInputField('') 
    const [email, emailOnChange] = useInputField('') 


    const handleSubmit  = (e) =>{ 
        e.preventDefault();
        console.log('submit data => ',name,email);
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input 
                    defaultValue={'name'} 
                    type="text" 
                    placeholder='Name'
                    onChange={nameOnChange}
                 />
                <input 
                    defaultValue={'email@a.com'} 
                    type="email" 
                    placeholder='e@a.com'
                    onChange={emailOnChange}
                 />

                <input type="submit" />
           </form>
        </div>
    );
};

export default HookForm;