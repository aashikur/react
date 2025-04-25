import { useState, useEffect } from 'react';

export const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    const StringData = JSON.stringify(data);
    localStorage.setItem('Data', StringData);




    
    const printf = (data)=> {
        console.log(data);
    } 

    return {data,printf}
};


