import { Link } from "react-router-dom";

const Hearder =()=>{
    return (
<div>
    <nav>
<ul className="flex gap-9 mt-10 justify-center text-4xl text-cyan-800 ">
   
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to ='/users'>Users</Link>
    <Link to='/contact'>Contact</Link>
    
</ul>
</nav>
</div>
    )
}
export default Hearder;
