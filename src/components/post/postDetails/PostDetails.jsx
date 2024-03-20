import { useLoaderData } from "react-router-dom";

const PostDetails =()=>{
    const post = useLoaderData()
    const {id,title,body} =post
    return(
        <div className="text-center">
            <h1 className="text-center text-2xl ">This Post Details:{id} </h1>
            <h1>Title:{title}</h1>
            <p><small>{body}</small></p>

        </div>
    )
}
export default PostDetails;