
// export default function ToDo({task, isDone}){
//     return (
//         <>
//         <li>Task: '{task}'</li>
        
//         </>
//     )
// }


// export default function ToDo({task, isDone, time = 0}){
 
//         if(isDone){
//             return <li>Task Done: '{task}' Duration : {time} </li>
//         } 
//         else {
//             return <li>Incomplee - X - '{task}'</li>
//         }
    
// }


// // Doing Thing with Ternary Operator
// export default function ToDo({task, isDone, time}){
//     return isDone ? <li>Done: {task} Time: {time}</li> : <li>Not Done: {task}</li>
// }





// // Doing Thing with Ternary Operator
// export default function ToDo({task, isDone, time}){
//     return isDone && <li>Done: {task} Time: {time}</li>;
// }





// // Doing Thing with Ternary Operator
// export default function ToDo({task, isDone, time}){
//     return isDone || <li>Not Done: {task} Time: {time}</li>;
// }



export default function ToDo({task, isDone, time}){

    let listItem;

    if(isDone) {
        listItem = <li>Done: {task}, duration = {time}</li>
    } 
    else {
        listItem = <li>Done: {task}, duration = {time}</li>

    }

    return listItem;

}

