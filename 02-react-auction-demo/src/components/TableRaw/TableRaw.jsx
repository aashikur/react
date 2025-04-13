import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const TableRaw = ({ Tdata, handleFavorite }) => {
  const { title, currentBidPrice, timeLeft, image, id, isFavorite } = Tdata;

  const notify = (title) =>
    toast.success(`${title} has been added to your favorites`, {
      position: 'top-right',
      autoClose: 1000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <tr>
      <td className="w-12 md:w-25 opacity-100">
        <img className="aspect-square rounded" src={image} alt={title} />
      </td>
      <td>{title}</td>
      <td>{currentBidPrice}</td>
      <td>{timeLeft}</td>
      <td>
        <div className="w-4 mx-auto">
          <button
            disabled={isFavorite}
            className={isFavorite ? 'cursor-not-allowed' : 'cursor-pointer'}
            onClick={() => {
              handleFavorite(id);
              notify(title);
            }}
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <CiHeart className="text-red-500 text-2xl" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRaw;
