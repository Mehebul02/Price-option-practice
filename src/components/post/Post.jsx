import { Link } from "react-router-dom";

const Post =({post})=> {
    const {id,title,body} =post
    const postStyle ={
        border:'2px solid red',
        padding:'20px',
    borderRadius:'10px'
    }
    return(
        <div style={postStyle}>
            <p className="text-4xl">Post OF Id:{id}</p>
            <p className="text-2xl">Title:{title}</p>
            <Link to={`/post/${id}`}><button className="btn">Post Details</button></Link>

        </div>
    )

}

export default Post;