import { useState } from "react";


// Counter Component
// 
// A React functional component that renders a simple counter with increment and decrement functionality.
// 
// This component maintains a `count` state using the `useState` hook. It provides two buttons:
// - "Add(+)" to increment the counter.
// - "Sub(-)" to decrement the counter (only if the count is greater than 0).
// 
// The component also applies inline styles to the container div for basic styling.
// 
// @returns {JSX.Element} A React element that displays the counter and buttons for interaction.
// 
// Properties:
// - Style: Inline styles applied to the container div.
//   - border: Border style for the container.
//   - padding: Padding inside the container.
//   - width: Width of the container.
// 
// Functions:
// - addValue: Increments the `count` state by 1 when the "Add(+)" button is clicked.
// - subValue: Decrements the `count` state by 1 when the "Sub(-)" button is clicked, 
//   but only if the current `count` is greater than 0.
// 
// State:
// - count: The current value of the counter.
// - setCount: Function to update the `count` state.
function Counter(){
    const Style = {
        border: '1px solid salmon',
        padding: '20px',
        width:'100%',
    }

    const [count, setCount]= useState(0);
    const addValue = () => {
        const newCount = count + 1;
        setCount(newCount);
    } 
    const subValue = ()=>{
               if(count > 0 ){
                const newCount = count - 1;
                setCount(newCount)
               }
    }

    return (
        <>
            <div style={Style}>
                <p>Counter: {count}</p>
                <button onClick={ subValue}>Sub(-)</button>
                <button onClick={addValue}>Add(+)</button>
            </div>
        </>
    )
}

export default Counter;