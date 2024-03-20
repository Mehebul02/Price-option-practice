import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Hearder =()=>{
    return (
<div>
    <nav>
<ul className="flex gap-9 mt-10 justify-center text-4xl text-cyan-800 ">
   
    <Link to='/'>Home</Link>
    {/* <Link to='/about'>About</Link> */}
    <NavLink to='/about'>About</NavLink>
    {/* <Link to ='/users'>Users</Link> */}
    <NavLink to = '/users'>Users</NavLink>
    {/* <Link to ='/posts'>Posts</Link> */}
    <NavLink to='/posts'>Posts</NavLink>
    {/* <Link to='/contact'>Contact</Link> */}
    <NavLink to='/contact'>Contact</NavLink>
    
</ul>
</nav>
</div>
    )
}
export default Hearder;
