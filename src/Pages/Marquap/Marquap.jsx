import moment from 'moment';
import Marquee from "react-fast-marquee";
const Marquap = () => {
    return (
        <div className=" w-[98%] mx-auto ">
            <div className='bg-slate-600 mt-2 rounded-md '>
            <Marquee pauseOnHover={true} speed={100}>
            <h1 className=" text-2xl font-semibold text-cyan-600 text-center py- md:mr-10 mr-6  "> Welcome to Our Social Events </h1>
            <h1 className=" text-2xl font-semibold text-cyan-600 text-center py- mr-6 md:mr-10 "> Welcome to Our Social Events </h1>
            <h1 className=" text-2xl font-semibold text-cyan-600 text-center mr-10 py-4"> Welcome to Our Social Events </h1>
            </Marquee>
            </div>
            <div className=' lg:px-10 pl-10 text-center '>       
                <p>{moment().format("dddd: MMMM : YYYY")}</p>
                <p className='pl-6 '>{moment().format(" H : mm : ss A ")}</p>
            </div>
            
        </div>
    );
};

export default Marquap;