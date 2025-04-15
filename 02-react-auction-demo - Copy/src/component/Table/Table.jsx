import React from 'react';

const Table = ({ AuctionData,ClickedButton }) => {

    // console.log(AuctionData)
    return (
        <div>
            {/* Auction Table  */}
            <div className="grid grid-cols-4 border border-gray-900 py-4 px-4">
                <div>item</div>
                <div>BidPrice</div>
                <div>TimeLeft</div>
                <div>Add now</div>
            </div>
            {
                AuctionData.map(item => 
                    <div key={item.id} className="grid grid-cols-4 border border-gray-700 py-4 px-4 items-center">
                    <div className='flex gap-2 items-center'>
                    <div><img className='w-14 h-14 rounded' src={item.image} alt="" /></div>
                    <div>{item.title}</div>
                    </div>
                    <div>${item.currentBidPrice}</div>
                    <div>timeLeft</div>
                    <div>
                        <button disabled={item.isClicked} onClick={()=>ClickedButton(item.id)} className={`${item.isClicked? 'cursor-not-allowed':'cursor-pointer'}`}>
                               {
                                !item.isClicked? '🤍':'💔'
                               }
                                
                        </button>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default Table;