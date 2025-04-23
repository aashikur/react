import React, { useContext } from 'react';
import Special from './Sepcial';
import { AssetContext } from './FamilyTree';

const MySelf = () => { 
    const newAssetAnyName  = useContext(AssetContext)
    console.log(newAssetAnyName)
    return (
        <div>
            MySelf 
            <Special></Special> 
            <p className='border'>New: {newAssetAnyName}</p>
        </div>
    );
};

export default MySelf;