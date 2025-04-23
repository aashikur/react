import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='border rounded p-3'>
            <div className="text-green-400">Uncle</div>
            <div className='flex gap-3'>
                <div className='border'><Cousin name={'Rafsa'}></Cousin></div>
                <div className='border'><Cousin name={'Sathi'}></Cousin></div>
            </div>
        </div>
    );
};

export default Uncle;