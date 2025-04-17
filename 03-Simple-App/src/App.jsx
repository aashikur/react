import React, { Suspense } from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import PricingOption from './components/PricingOption/PricingOption';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const pricingPromise = fetch('pricingData.json').then(res => res.json())
const studentData = [
  {
    name: "Alice",
    physics: 85,
    math: 90,
    chemistry: 88
  },
  {
    name: "Bob",
    physics: 78,
    math: 82,
    chemistry: 80
  },
  {
    name: "Charlie",
    physics: 92,
    math: 88,
    chemistry: 91
  },
  {
    name: "Diana",
    physics: 70,
    math: 75,
    chemistry: 72
  },
  {
    name: "Ethan",
    physics: 88,
    math: 94,
    chemistry: 90
  }
];
const App = () => {

  return (
    <React.Fragment>
      <header className='border border-gray-300'>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
          <PricingOption pricingPromise={pricingPromise} /> 
        </Suspense>
      </main> 

    <div className='py-10 border my-5'>
      <h1 className='text-center font-4xl font-semibold'>Chart & Diagram</h1>
      <LineChart width={400} height={200} data={studentData}>
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
      </LineChart>

    </div>

      <LineChart
        width={600}
        height={300}
        data={studentData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
        <Line type="monotone" dataKey="chemistry" stroke="#ffc658" />
      </LineChart>

    </React.Fragment>
  );
};

export default App;