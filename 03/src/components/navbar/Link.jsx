import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='hover:border-b border-b border-transparent hover:border-gray-400 transition-all'> 
            <a className='block py-2 lg:py-0' href={route.path}>{route.name}</a>
        </li> )
};

export default Link;