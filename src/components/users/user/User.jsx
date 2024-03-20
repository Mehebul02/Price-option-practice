import { Link } from "react-router-dom";

const User =({user})=>{
    const {id,name,email,phone} =user
    const useStyle ={
        border:'2px solid red',
        padding:'15px',
        borderRadius:'10px'
    }
    return(
        <div style={useStyle}>
            <h1>{name}</h1>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            {/* <Link to ={`/user/${id}`}>Show Details</Link> */}
            <Link to={`/user/${id}`}><button className="btn bg-yellow-700">Show Details</button></Link>

        </div>
    )
}
export default User;