import { Outlet } from "react-router-dom";
import Hearder from "../Header/Header";
import Footer from "../Footer/Footer";

const Home =()=>{
    return(
<div>
    
    <Hearder></Hearder>   
    <Outlet></Outlet>
    <Footer></Footer>
</div>
    )
}
export default Home;