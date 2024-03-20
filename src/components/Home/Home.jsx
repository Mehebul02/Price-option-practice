import { Outlet, useNavigation } from "react-router-dom";
import Hearder from "../Header/Header";
import Footer from "../Footer/Footer";

const Home =()=>{
    const navigation = useNavigation()
    return(
<div>
    
    <Hearder></Hearder> 
    {
        navigation.state ==='loading'?<p className="text-center text-3xl text-cyan-900">Loading...</p>:<Outlet></Outlet>
    }  
    
    <Footer></Footer>
</div>
    )
}
export default Home;