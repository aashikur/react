
export default function SingleFriend({friend}){

    console.log(friend);
    const {name,email,id} = friend;
    return(
        <>
                <div className="card">
                <h4>Name: {name}</h4>
                <p>email: {email}</p>
                </div>
        </>
    )
}