import { Outlet } from "react-router-dom";

import NavBar from "../../Pages/NavBar/NavBar";
import Footer from "../Footer/Footer";



const MainLayout = () => (
    <div className="w-[98%] mx-auto  ">
        <div className=" ">
            <NavBar></NavBar>

            <Outlet></Outlet>
          
            <Footer></Footer>

        </div>
    </div>
);

export default MainLayout;