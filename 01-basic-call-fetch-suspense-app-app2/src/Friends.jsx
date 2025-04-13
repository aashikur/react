import { use } from 'react';
import './index.css'
import SingleFriend from './SingleFriend';



function Friends({friendPromise}) {
    const friends = use(friendPromise);
    // console.log("Friends",friends);

    return (
      <>
        <div className="card">
          <h3>friend: {friends.length}</h3>
        {
            friends.map(friend=> <SingleFriend key={friend.id} friend={friend} ></SingleFriend>)
        }
        </div>
      </>
    );
  }
  
  export default Friends;
  