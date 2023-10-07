import { Outlet } from "react-router-dom";
// import Home from "../Home/Home";
import NavBar from "../../Pages/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div className="w-[98%] mx-auto  ">
              <NavBar></NavBar>
           <Outlet></Outlet>
          
         
        </div>
    );
};

export default MainLayout;