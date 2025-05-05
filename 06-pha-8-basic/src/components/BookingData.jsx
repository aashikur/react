import React from 'react';
import useBooking from '../hooks/useBooking';

const BookingData = () => { 

    const  { booked, addBooking , removeBooking}= useBooking();
    console.log('DOM',booked)


    return (
        <div>
            { 
                
                booked.map((item,index)=> <>
                    <div key={index} className='w-1/3 border-b p-2 my-2 flex justify-between  items-center '>
                        <h1>{index+1} : {item.name}</h1>
                        <button
                        onClick={()=>{removeBooking(item.id)}}
                        className='btn'>Cancel</button>
                    </div>
                </>)
            } 
        </div> 

    );
};

export default BookingData;