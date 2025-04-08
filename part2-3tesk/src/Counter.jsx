import { useState } from "react"

export default function Counter() {
    
    const [Count,setCount] = useState(0)
    const add = ()=> setCount(Count + 1) 
    const sub = ()=> setCount(Count - 1)
    const reset =()=> setCount(0)


    return (<>
        <div className="wrapper">
            <h3>This is Counter : {Count}</h3> 
            <hr /> 
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    </>)
}