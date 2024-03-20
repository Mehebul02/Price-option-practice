import { Link, useRouteError } from "react-router-dom";

const ErrorPage =() =>{
    const error =useRouteError()
    console.log(error)
    return(
        <div className=" ">
            <h1 className="text-5xl text-center text-red-800">Opps! Ki korli tui</h1>
            <p className="text-center text-7xl">{error.statusText || error.message}</p>
            {
                error.status ===404 && <div>
                    <p>Page Not Found</p>
                    <Link to={'/'}><button className="btn">Home</button></Link>
                </div>
            }
        </div>
    )
}
export default ErrorPage;