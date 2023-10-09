// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Slide = ({ slideImg }) => {

    const [selideindx, setSelideindx] = useState(0);
    const [activeSelide, setActiveSelide] = useState(slideImg[selideindx])

    const handleSelider = (number) => {
        console.log('number', number);
        console.log('index', selideindx);

        if (selideindx === 0 && number == -1) {
            setSelideindx(slideImg.length - 1)
            return

        }
        if (selideindx === slideImg.length && number == 1) {
            setSelideindx(0)
            return

        }
        let newNumber = selideindx + number;
        setSelideindx(newNumber);
        return

    }

    useEffect(() => {
        setActiveSelide(slideImg[selideindx])
        
    }, [selideindx])
    
    return (
        <div id="slider" className=" w-[95%] mx-auto  flex flex-col items-center justify-center  p-8 h-screen ">
            {
                slideImg &&
                <>
                    <div className="slider-container lg:top-1 -top-10  relative flex flex-col items-center justify-center w-screen h-[80vh] shadow-md  ">
                        <img className=" w-[98%] mx-auto h-[100vh] rounded-md "
                            src={activeSelide} alt="" />
                    </div>
                    <a onClick={() => { handleSelider(-1) }} className="btn-prev absolute left-5 p-2 bg-cyan-600 text-white text-lg  rounded-full h-8 w-10 flex items-center justify-center hover:cursor-pointer ">&lt;</a>
                    <a onClick={() => { handleSelider(-1) }} className="btn-next absolute right-5 bg-cyan-600 text-white text-lg  p-2 rounded-full h-8 w-10 flex items-center justify-center">&gt;</a>
                </>
            }
        </div>
    );
};
Slide.propTypes={
    slideImg:PropTypes.array
}

export default Slide;