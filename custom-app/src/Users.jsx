import {use} from "react"
export default function User({FetchUser}){

    const theStyle = {
      border: '1px solid white',
      width: '100%',
      padding: '10px',
      margin: '5px auto',
      borderRadius:'10px'
    }

    const users = use(FetchUser);
    // console.log(users);
    return(<>
      <div style={theStyle}>
      <h3>USER : {users.length}</h3>
      </div>
    </>)
}