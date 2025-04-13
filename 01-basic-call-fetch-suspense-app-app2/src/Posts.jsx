import './index.css'
import {use} from "react"
import Post from './Post'

export default function Posts({FetchPost}){

    const posts = use(FetchPost);
    console.log('Test',posts);


    return(<>
       <div className="card">
       <h2>Post : {}</h2>
       {
        posts.map(post => <Post className="card" post={post}></Post>)
       }
       </div>
    </>)
}