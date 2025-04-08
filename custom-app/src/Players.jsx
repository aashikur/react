import { useEffect, useState } from 'react'
import './index.css'







function Players() {



    const [players,setPlayers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])






    return (<>
        <div className='card'>
            <h2>Players are All here: {players.length}</h2> 
            
                <ol>
                    {
                     players.map(player => <li>name: {player.name}</li>)

                    }

                </ol>
            
        </div>
    </>)
}


export default Players