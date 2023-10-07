
import Marquee from "react-fast-marquee";
const Marquap = () => {
    return (
        <div className=" w-[98%] mx-auto ">
            <div className='bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-3 py-2 rounded-md '>
            <Marquee pauseOnHover={true} speed={100}>
            <h1 className=" text-2xl font-bold text-white text-center py- md:mr-10 mr-6  "> Welcome to Our Social Events </h1>
            <h1 className=" text-2xl font-bold text-white text-center py- mr-6 md:mr-10 "> Welcome to Our Social Events </h1>
            <h1 className=" text-2xl font-bold text-white text-center mr-10 py-4"> Welcome to Our Social Events </h1>
            </Marquee>
            </div>
           
            
        </div>
    );
};

export default Marquap;