import React, { use } from 'react';
import Friend from './Friend';
import { MoneyContext } from './FamilyTree';

const Aunt = () => { 
    const [money,setMoney] = use(MoneyContext) 
    return (
        <div className='border rounded p-3'>
            <div className="text-green-400">Aunti</div>
            <div className='flex gap-3'>
                <div className='border'>Jodu</div>
                <div className='border'>Modhu</div>
                <div className='border'>Kodu</div>
            </div>
            <div className='border'>
                <Friend></Friend> 
                <p><small>Family Money : {money}</small></p> 
                <button onClick={()=> setMoney(money+100)}>Donate 100</button>
            </div>
        </div>
    );
};

export default Aunt;