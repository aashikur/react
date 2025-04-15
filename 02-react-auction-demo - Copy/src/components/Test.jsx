import React from "react";

const ActiveAuctions = ({ FavoriteList, AuctionData, heartButton, TotalPrice ,FavRemove}) => {

  // console.log(UpdateAuctionData);
  return (
    <div className="bg-[#0c1022] min-h-screen text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* {==================================================================================} */}
        {/* Left side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-pink-500 mb-1">Active Auctions</h2>
          <p className="text-gray-300 mb-6">Discover and bid on extraordinary items</p>
          <div className="rounded-xl overflow-hidden">
            <div className="bg-gray-800 px-5 py-5 grid  grid-cols-4 gap-4 font-semibold text-white border-b border-gray-700">
              <div className="col-span-2">Items</div>
              <div>Current Bid</div>
              <div className="flex justify-between">
                <div>Time Left</div>
                <div>Bid</div>
              </div>
            </div>

            {
              AuctionData.map(item => (<div key={item.id}>
                <div key={item.id} className="grid grid-cols-4 border-b border-gray-700 px-4 py-4 hover:bg-gray-700 bg-gray-900">
                  <div className="flex gap-4 col-span-2"><img className="w-10 h-10 object-cover rounded border border-gray-800" src={item.image} alt="" /> <span className="">{item.title}</span></div>
                  <div className="p-3">${item.currentBidPrice}</div>
                  <div className="flex justify-between">
                    <div className="p-3">{item.timeLeft}</div>
                    <div className="p-3 text-xl rounded-4xl cursor-pointer hover:scale-125 transition-all hover:border-none">
                      <button disabled={!item.isFav} onClick={() => heartButton(item.id)} className={` ${item.isFav ? 'cursor-pointer':'cursor-not-allowed'}`}> {item.isFav ? '❤' : '💖'}</button></div>
                  </div>
                </div>
              </div>))
            }


          </div>
        </div>































        {/* Right side */}
        <div className="w-full lg:w-80 bg-gray-900 rounded-xl p-4 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            <span className="text-pink-500">❤️</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text">
              Favorite Items
            </span>
          </h3>
          {FavoriteList.length !== 0 ? (
            <div>
                {
                  FavoriteList.map(item => (
                    <div key={item.id} className="flex items-center gap-3 mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p>{item.title}</p>
                      <p className="text-sm text-gray-400">
                        ${item.currentBidPrice} &nbsp; | &nbsp; Bids: {item.bidsCount}
                      </p>
                    </div>
                    <button onClick={()=>FavRemove(item.id)}>
                        <span className="cursor-pointer">❌</span>
                    </button>
                  </div>
                  ))
                }
              <div className="border-t border-gray-700 pt-3 text-right text-lg flex justify-between">
                <span>Total bids Amount:{" "}</span>
                <span className="text-pink-400">${TotalPrice}</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">No favorites yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveAuctions;
