
import './App.css'
import Counter from './Counter'
import Bating from './Bating'
import { useState } from 'react';

function App() {
  function handleClick(x = 0) {
    const num = 7 + x;
    alert(num);
  };

  return (
    <>
      <h1>Part 2</h1>

      <Counter></Counter> 
      <Bating></Bating>

      <button onClick={handleClick}>CLick Here</button>
      <button onClick={function handleClick2() {
        alert("click2 button")
      }}>CLick Here</button>

      {/* {Send parameter } */}
      <button onClick={() => handleClick(3)}>Send Parametter</button>

    </>
  )
}












export default App 