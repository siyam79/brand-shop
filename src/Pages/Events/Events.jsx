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
        <div className='  to-purple-400 ' data-aos="zoom-in">
          
            <div className="card w-full h-full bg-base-200 shadow-inner  hover:shadow-xl   -inset-0.5 bg-gradient-to-tr from-pink-400 to-purple-600  hover:bg-violet-600 ">
                <figure className=" px-1 py-1 " data-aos="fade-up-right">
                    <img src={image} alt="Shoes" className="rounded-xl h-[300px] " />
                </figure>
                <div className=" py-4 px-6 items-center   ">
                    <h2 className=" font-bold text-white text-xl ">{title}</h2>
                    <p className='py-2 text-md  text-cyan-800 '> {sort_description} </p>
                </div>
                <div className=' flex justify-between items-center px-10 py-4 '>
                    <p className=' flex items-center font-bold text-lg '> <span className=' text-cyan-600 '><BsCurrencyDollar className='text-2xl text-white  '></BsCurrencyDollar></span><span className='text-xl text-white '>{price}</span></p>

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