import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../useAuth/useAuth";

const NavBar = () => {

    const { logOut, user } = useAuth()
    console.log(user);

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




        {
            !user?.email ? <li className="hover:bg-sky-700  px-1 rounded-md ">
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-700 px-4 py-1 rounded-md ' : ""
                }
            >
                Login
            </NavLink>

        </li>
            :
            
            <div className="flex justify-center items-center  gap-4 ">
                <div>
                    <button onClick={logOut} className="">Logout</button>
                </div>
                <img className="w-8 rounded-full " src={user?.photoURL} alt={user.displayName} />
            </div>
                
        }


    </>

    return (
        <div>
            <div className="  ">
                <nav className=" lg:flex flex items-center justify-between rounded-md bg-slate-700  text-white py-4 px-6 ">
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
                    <ul className={`lg:hidden gap-12 z-50 block text-lg space-y-4 px-4 py-2 mt-0 rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]  font-bold  ${menuOpen ? " fixed duration-700 bg-cyan-400  w-full  text-center  " : 'hidden'}`}>
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