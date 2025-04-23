import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import Dad from './Dad';
import Cousin from './Cousin';
import Uncle from './Uncle';
import Aunt from './Aunt';
import './FamilyTree.css';

// Prop Drilling..
/*
- Create a context using -> using createContext with a default value
- make sure export the Context to be used in other files
*/
export const AssetContext = createContext('');
export const MoneyContext = createContext(0)

const FamilyTree = () => {
    // const asset = 'Diamond' 
    const [money, setMoney] = useState(0)

    const newAsset = 'Gold'
    return (
        <div>
            <h1 className='text-red-300 text-3xl mb-5'>Family Tree</h1> .
            <p>Total Family Money: <span className="text-pink-500">{money}</span></p>
            <div className='p-5 border border-yellow-400 text-center'>
                <MoneyContext value={[money,setMoney]}>
                    <AssetContext.Provider value={newAsset}>
                        <Grandpa></Grandpa>
                    </AssetContext.Provider>
                </MoneyContext>
            </div>

        </div>
    );
};

export default FamilyTree;