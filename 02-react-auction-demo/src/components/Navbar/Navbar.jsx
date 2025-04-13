import React from 'react';

const Navbar = ({ FavoriteList="", TotalPrice="" }) => {
  return (
    <React.Fragment>
      <div className="flex justify-between navbar z-10 bg-gray-600/50 backdrop-blur-[10px] border border-gray-600 mx-auto w-11/12 lg:w-4/5 px-5 lg:px-10 rounded-4xl sticky top-2">
        {/* Logo */}
        <div className="order-1 md:order-2">
          <a className="text-xl lg:text-2xl hidden md:block">
            <span className="font-light  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Auction</span>
            <span className="font-extrabold text-yellow-300">Gallery</span>
          </a>
          <a className="text-xl lg:text-2xl md:hidden">
            <span className="font-light  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Auction</span>
            <span className="font-extrabold text-yellow-300">G</span>
          </a>
        </div>
        {/* menu */}
        <div className="order-0 md:order-2 pl-4 md:pl-0">
          {/* menu Big Screen */}
          <div className="navbar-center hidden lg:flex">
            <ul className="inline-flex gap-5 px-1 text-xl border-none text-white">
              <li>
                <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">Home</a>
              </li>
              <li>
                <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">Auctions</a>
              </li>
              <li>
                <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">Categories</a>
              </li>
              <li>
                <a className="poppins cursor-pointer transition-all hover:border-b border-white opacity-80 hover:opacity-100">How to works</a>
              </li>
            </ul>
          </div>
          {/* menu Mobile Screen */}
          <div className="navbar-end lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden btn bg-transparent shadow-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#111827] border-none rounded-box z-1 mt-3 w-52 p-2 shadow-sm text-[16px]"
              >
                <li>
                  <a className="poppins py-3 text-white hover:bg-[#1F2937]">Home</a>
                </li>
                <li>
                  <a className="poppins py-3 text-white hover:bg-[#1F2937]">Auctions</a>
                </li>
                <li>
                  <a className="poppins py-3 text-white hover:bg-[#1F2937]">Categories</a>
                </li>
                <li>
                  <a className="poppins py-3 text-white hover:bg-[#1F2937]">How to works</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Favorite Items Dropdown */}
        <div className="order-2">
          <div className="dropdown dropdown-end lg:mr-2">
            <div tabIndex={0} role="button" className="btn bg-transparent shadow-none border-none">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell-icon lucide-bell"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                </svg>
                <span className="badge badge-sm indicator-item block border-none text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                  {FavoriteList.length} {/* Total items in favorites */}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-[#111827] z-1 mt-3 w-52 shadow"
            >
              <div className="card-body text-white">
                <span className="text-lg font-bold">{FavoriteList.length} Items</span>
                <span className="text-info">Subtotal: ${TotalPrice.toFixed(2)}</span>
                <div className="card-actions">
                  <button className="btn btn-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 border-none text-white">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border border-pink-500">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/KzNX4hQq/side-icon.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between py-3">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="py-3">Settings</a>
              </li>
              <li>
                <a className="bg-gradient-to-r py-3 from-red-400 to-orange-500 text-white">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;