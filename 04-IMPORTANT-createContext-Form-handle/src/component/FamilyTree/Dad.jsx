import React from 'react';
import Brother from './Brother';
import Sister from './Sister';
import MySelf from './MySelf';

const Dad = () => {
    return (
        <div className='border rounded p-3'>
            <div className="text-green-400">Dad</div>
            <div className='flex gap-3'>
                <div className='border'><Brother ></Brother></div>
                <div className='border'><Sister ></Sister></div>
                <div className='border'><MySelf ></MySelf></div>
            </div>
        </div>
    );
};

export default Dad;