import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="crimson">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

         
            
        </div>
    );
};

export default Root;