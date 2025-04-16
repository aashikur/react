import React, { Suspense } from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import PricingOption from './components/PricingOption/PricingOption';


const pricingPromise = fetch('pricingData.json').then(res => res.json())

const App = () => {

  return (
    <>
      <header className='border border-gray-300'>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback={
          <span className="loading loading-spinner text-primary"></span>
        }>
          <PricingOption pricingPromise={pricingPromise} />
        </Suspense>
      </main>
    </>
  );
};

export default App;