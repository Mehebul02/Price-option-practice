import { useLoaderData } from "react-router-dom";
import Post from "../components/post/Post";

const Posts =()=>{
    const posts =useLoaderData()
    
        return (
        <div>
            <h1 className="text-center text-3xl text-red-600">This Is Posts Section:{posts.length}</h1>
            <div className="text-center grid grid-cols-3 gap-5">
                {
                    posts.map(post=> <Post key={post.id} post={post}></Post>)
                }

            </div>

        </div>
    )
};
export default Posts;