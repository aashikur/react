import React from 'react';
import heroimage from '../../assets/books.jpg'

const Banner = () => {
    return (
<div className="hero bg-base-200 h-[520px]">
  <div className="hero-content flex-col gap-52 lg:flex-row-reverse">
    <img
      src={heroimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold mb-5">Box Office News!</h1>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;