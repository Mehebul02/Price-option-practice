import { Link, useNavigate } from "react-router-dom";

const Post =({post})=> {
    const {id,title,body} =post
    const navigate =useNavigate()
    const postStyle ={
        border:'2px solid red',
        padding:'20px',
    borderRadius:'10px'
    }
    const handleMoreDetails =()=>{
        navigate(`/post/${id}`);

    }
    return(
        <div style={postStyle}>
            <p className="text-4xl">Post OF Id:{id}</p>
            <p className="text-2xl">Title:{title}</p>
            <Link to={`/post/${id}`}><button className="btn">Post Details</button></Link>
            <button className="btn bg-green-700" onClick={handleMoreDetails}>See more details</button>

        </div>
    )

}

export default Post;