import React from 'react';
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';

const FavoriteItems = ({ favlists, removeList }) => {
  const { title, image, currentBidPrice, bidsCount, id } = favlists;

  const notifyRemoval = () => {
    toast.warn(`${title} has been removed from favorites`, {
      position: 'top-right',
      autoClose: 1000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className="flex justify-between px-5 py-4 border-b-2 border-t-2 border-gray-600 items-center">
      <div className="w-9/12 flex-1 flex gap-5 items-center">
        <div className="w-25">
          <img className="rounded aspect-square" src={image} alt="" />
        </div>
        <div className="opacity-50 hover:opacity-100">
          <h1 className="mb-3">{title}</h1>
          <div className="flex gap-5">
            <div>${currentBidPrice}</div>
            <div>Bids: {bidsCount}</div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="cursor-pointer p-5 hover:scale-125 transition-all"
          onClick={() => {
            removeList(id); 
            notifyRemoval();
          }}
        >
          <IoMdClose size={25} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default FavoriteItems;