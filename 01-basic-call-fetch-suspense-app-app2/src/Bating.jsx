import { useState } from "react"
import './index.css'


function Bating(){

    const [run, setRun] = useState(0);

    const handleSingle = () => {
       const newRun = run + 1;
        setRun(newRun)
    }

    const handleSix = () => {setRun(run + 6)};
    const handleFour = () => {setRun(run + 4)};

    return(
        <>
            <div className="bat">
                <p>Total Run : {run}</p>
  
                {run >= 50 && <p>Run 50 Hits</p>}
                <button onClick={handleSingle}>Single</button>
                <button onClick={handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        </>
    )
} 




export default Bating