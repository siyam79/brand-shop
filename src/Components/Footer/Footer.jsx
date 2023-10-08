// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <div className="mt-10 rounded  ">

            <footer className="bg-gray-800 text-white  ">
                <div className="md:flex md:justify-between md:items-center sm:px-12  px-4 bg-[#ffffff19] py-8  ">

                    <h1 className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 "> <span className="text-cyan-600 font-bold ">Social</span> Events You are Ready to Manegment  </h1>
                    <div>
                        <input type="text" placeholder="Enter Your Address" className=" sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2 rounded-sm px-2  focus:outline-none focus:border-blue-500  " />
                        <button className=" w-full md:w-auto  bg-cyan-500 hover:bg-cyan-700 px-6 py-2 font-bold rounded-md text-white  "> Requst Now </button>
                    </div>


                </div>

                <footer className="footer p-16 bg-neutral text-neutral-content">
                    <nav className="">
                        <header className="footer-title">Services</header>
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </nav>
                </footer>

            </footer>
        </div>
    );
};

export default Footer;