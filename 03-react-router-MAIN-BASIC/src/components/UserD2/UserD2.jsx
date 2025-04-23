import React, { use } from 'react';

const UserD2 = ({userPromise}) => { 
    const userPromises = use(userPromise);
    const {name,email} = userPromises;
    console.log(userPromises);
    return (
        <div className='mt-2' style={{ backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '8px', maxWidth: '300px' }}>
            <h2 className='text-xl text-pink-500 font-bold' style={{ marginBottom: '10px' }}>{name}</h2>
            <p style={{ marginBottom: '15px' }}>{email}</p>
            <button>
                Read More
            </button>
        </div>
    );
};

export default UserD2;