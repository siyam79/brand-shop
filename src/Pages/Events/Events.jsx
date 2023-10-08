import PropTypes from 'prop-types';
import { BsCurrencyDollar, } from 'react-icons/bs';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Events = ({ event }) => {

    const { title, image, price, id , sort_description } = event;
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])

    return (
        <div className=''>
            <h1> </h1>
            <div className="card w-full h-full bg-base-200 shadow-inner  hover:shadow-xl">
                <figure className=" px-1 py-1 ">
                    <img src={image} alt="Shoes" className="rounded-xl h-[300px] " />
                </figure>
                <div className=" py-4 px-6 items-center   ">
                    <h2 className=" font-bold text-xl ">{title}</h2>
                    <p className='py-2 text-md '> {sort_description} </p>
                </div>
                <div className=' flex justify-between items-center px-10 py-4'>
                    <p className=' flex items-center font-bold text-lg '> <span className=' text-cyan-600 '><BsCurrencyDollar className='text-2xl  '></BsCurrencyDollar></span><span className='text-xl '>{price}</span></p>

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