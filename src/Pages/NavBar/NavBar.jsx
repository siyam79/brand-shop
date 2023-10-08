import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../useAuth/useAuth";

const NavBar = () => {

    const { logOut, user } = useAuth()
    console.log(user);

    const [active , setActive] = useState(false)
 
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

    }

    const navLinks = <>

        <li className=" hover:bg-sky-700 px-3 rounded-md ">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-700  px-2  rounded-md ' : ""
                }
            >
                Home
            </NavLink>
        </li>

        <li className=" hover:bg-sky-700 px-3 rounded-md ">
            <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-700  px-2  rounded-md ' : ""
                }
            >
                Services
            </NavLink>
        </li>

        <li className=" hover:bg-sky-700 px-3 rounded-md ">
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-700  px-2  rounded-md ' : ""
                }
            >
                About
            </NavLink>
        </li>


        <li className=" hover:bg-sky-700 px-3 rounded-md ">
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-700  px-2  rounded-md ' : ""
                }
            >
                Contact
            </NavLink>
        </li>


        {
            !user?.email ? <div className=" lg:flex  items-center justify-center gap-4  ">
                 <li className=" hover:bg-sky-700 px-3 rounded-md ">
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-700  px-2  rounded-md ' : ""
                }
            >
                Register
            </NavLink>
        </li>
            <li className="hover:bg-sky-700  px-1 rounded-md ">
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-700 px-4 py-1 rounded-md ' : ""
                }
            >
                Login
            </NavLink>

        </li>
            </div>
            
            :
            
            <div className="flex justify-center items-center  gap-4 relative ">
               {
                active && (
                    <div className=" absolute top-8 z-50 bg-gray-700 px-10 ">
                    <button onClick={logOut} className=" text-center px-6 ">Logout</button>
                   <div className=" ">
                   <h1 className=" font-medium text-center "> {user?.displayName} </h1>
                   </div>
                </div>
                )
               }
                <img onClick={()=>setActive(!active)} className="w-8 rounded-full " src={user?.photoURL} alt={user?.displayName} />
            </div>   
        }

    </>

    return (
        <div>
            <div className="  ">
                <nav className=" fixed top-0 left-0 z-50 w-full mx-auto ml-1 mr-4 lg:flex flex items-center justify-between bg-slate-700  text-white py-8 px-4 ">
                    <h1 className=" text-2xl font-bold ">Social <span className=" text-cyan-600 ">Events</span></h1>
                    <ul className=" lg:flex lg:px-10 lg:gap-8 gap-4 mr-6 hidden font-bold text-lg ">
                        {navLinks}
                    </ul>
                    <div className=" flex lg:hidden items-center gap-6  ">
                        <button onClick={toggleMenu}>
                            {
                                menuOpen ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=" text-xl  cursor-pointer "></AiOutlineMenu>
                            }
                        </button>

                    </div>

                </nav>
                <div className="">
                    <ul className={`lg:hidden gap-12 z-40 mt-10 block text-lg space-y-4 px-4 py-2  rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]  font-bold  ${menuOpen ? " fixed duration-700 bg-cyan-400  w-full  text-center pb-6 " : 'hidden'}`}>
                        <li onClick={toggleMenu} className="py-4 space-y-4  ">
                            {navLinks}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;