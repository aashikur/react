




export default function UserList() {


    return (<>
        <div className="wrapper">
            <h2>This is user list:</h2>
        </div> 
        <Loader></Loader>
    </>)
}


function Loader(){
    return (<>
    
    <div className="wrapper">
    <h1>Loading...</h1> 
    </div>
    
    </>)
}