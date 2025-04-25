import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <div>
            <div>GramPa Max</div>
            <div className='flex'>
                <div className='p-5 border border-yellow-400'>  <Dad></Dad> </div>
                <div className='p-5 border border-yellow-400'> <Uncle></Uncle> </div>
                <div className='p-5 border border-yellow-400'>  <Aunt></Aunt></div>

            </div>
        </div>
    );
};

export default Grandpa;