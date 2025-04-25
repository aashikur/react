import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Submit CLICK..',e.target.name.value)
    }
    return (
        <div className='px-10 '>
          <form className='flex flex-col' onSubmit={handleSubmit}>
                <div>
                <input name='name' type="text" className='border' placeholder='Your name Please'/>  
                <br />
                <input className='button mt-1' type="submit" value="submit" />
                </div>
          </form>
        </div>
    );
};

export default SimpleForm;