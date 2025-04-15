import React from 'react';

const Favorite = ({ AuctionData,FavoriteList, TotalPrice,RemoveButton }) => { 
    // console.log(AuctionData)
    return (
        <div className='border border-gray-600 px-4 py-4'>
            <div className='w-full'>
                <h1 className='py-4 border-b border-gray-700 mb-10'>💖 Favorite Items</h1>


                {
                    FavoriteList.length == 0 ? 
                    <div className='py-4 px-4 mb-5 '>
                        <p className='text-xl'>No Favorite items Selected! </p>
                        <p>please select an item</p>
                    </div>
                    :
                    <div>
                {
                    FavoriteList.map(item =>
                        <div key={item.id} className='flex gap-5 py-4 px-4 bg-gray-800 border-b border-gray-900'>
                            <div>
                                <img className='w-14 h-14 rounded' src={item.image} alt="" /> 
                            </div>
                            <div className='flex-1'>
                               <div> <h1>{item.title}</h1></div>
                               <div className='flex gap-x-5'>
                                    <p>{item.bidsCount}</p>
                                    <p>{item.timeLeft}</p>
                               </div>
                            </div>
                            <div>
                                <button className='cursor-pointer' onClick={()=>RemoveButton(item.id)}>
                                    ❌
                                </button>
                            </div>
                        </div>
                    )
                }
                    </div>
                }





                <div className='py-4 px-4 border-t border-gray-700 flex justify-between'>
                    <span>Total Price: </span> <span className='text-pink-500 font-bold' >${TotalPrice}</span>
                </div>
            </div>

        </div>
    );
};

export default Favorite;