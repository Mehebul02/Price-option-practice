import { useLoaderData } from "react-router-dom";

const UserDetails =()=>{
    const user =useLoaderData()
    const {name,email,website} =user
    return (
        <div className="text-center">
            <h1 className="text-2xl">User: {name}</h1>
            <h1 className="text-2xl">Email: {email}</h1>
            <h1 className="text-2xl">WebSite : {website}</h1>

        </div>
    )
}
export default UserDetails;