import { useLoaderData } from "react-router-dom";
import User from "./user/User";

const Users =()=>{
    const users =useLoaderData();
    return (
        <div>
<h1 className="text-3xl text-center">This Is users:{users.length}</h1>
<div className="grid grid-cols-3 gap-7">
    {users.map((user,idx) => <User key={idx} user={user}></User>)
    }
</div>
        </div>
    )
}
export default Users;