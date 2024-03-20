import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails =()=>{
    const post = useLoaderData()
    const {postId} = useParams();
    const {id,title,body} =post
    const navigate = useNavigate()
    
    console.log(postId)
    const handleGoToBack =()=>{
        navigate(-1)


    }
    return(
        <div className="text-center">
            <h1 className="text-center text-2xl ">This Post Details:{id} </h1>
            <h1>Title:{title}</h1>
            <p><small>{body}</small></p>
            <button className="btn" onClick={handleGoToBack}>Go To Back</button>

        </div>
    )
}
export default PostDetails;