
// export default function ToDo({task, isDone}){
//     return (
//         <>
//         <li>Task: '{task}'</li>
        
//         </>
//     )
// }


export default function ToDo({task, isDone}){
 
        if(isDone){
            return <li>Task Done: '{task}'</li>
        } 
        else {
            return <li>Incomplee - X - '{task}'</li>
        }
    
}

