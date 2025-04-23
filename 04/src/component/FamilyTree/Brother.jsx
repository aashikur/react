import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => { 
    const [money,setMoney] = use(MoneyContext)
    return (
        <div>
            Brother
            <br />
            <button onClick={()=> setMoney(money+1000)}>Add 1000TK</button>
        </div>
    );
};

export default Brother;