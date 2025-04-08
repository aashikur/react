import { use } from 'react';
import './index.css'



function Friends({friendPromise}) {
    const friends = use(friendPromise);
    console.log("Friends",friends);

    return (
      <>
        <div className="card">
          <h3>friend</h3>
        </div>
      </>
    );
  }
  
  export default Friends;
  