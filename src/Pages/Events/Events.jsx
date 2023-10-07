import PropTypes from 'prop-types';
import { PiAppStoreLogo, } from 'react-icons/pi';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Events = ({ event }) => {

    const { title, image, sponcer_name, id } = event;
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])

    return (
        <div className=''>
            <div className="card w-full h-full bg-base-400 shadow-inner  hover:shadow-xl">
                <figure className=" px-1 py-1 ">
                    <img src={image} alt="Shoes" className="rounded-xl h-[300px] " />
                </figure>
                <div className=" py-6 px-6 items-center text-center  ">
                    <h2 className=" font-semibold text-lg ">{title}</h2>
                </div>
                <div className=' flex justify-between items-center px-10 py-4'>
                    <p className=' flex items-center gap-2 font-bold text-lg '> <span className=' text-cyan-600 '><PiAppStoreLogo className='text-2xl font-bold '></PiAppStoreLogo></span> {sponcer_name}</p>

                    <Link to={`/events/${id}`} className=' bg-blue-500 shadow-lg shadow-blue-500/50 py-1.5 px-4 rounded-md  text-white  font-bold '> View Details </Link>
                </div>

            </div>
        </div>
    );
};
Events.propTypes = {
    event: PropTypes.object
}

export default Events;