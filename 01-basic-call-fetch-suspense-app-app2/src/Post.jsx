export default function Post({post}){

    const {title,body} = post;
    return(<>
            <h5>Title is: {title}</h5> 
            <p>Description: {body}</p>
            <hr />
    </>)
}