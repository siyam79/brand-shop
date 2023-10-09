import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'
import slider3 from '../../assets/slider/slidser3.jpg'
import slider4 from '../../assets/slider/slider4.jpg'
import slider5 from '../../assets/slider/slider5 (2).jpg'
import Slide from './Slide'



const Sliders = () => {
    const slideImg =  [slider4, slider1, slider2, slider3,  slider5]

    return (
        <div>
            <Slide slideImg={slideImg}>

            </Slide>

        </div>
    );
};

export default Sliders;



// const Banner = () => {
//     return (
//         <div>
//             <div className=" ">
//                 <div className=" relative text-center w-1/2 mx-auto top-[250px] z-50  ">
//                     <h1>Welcome to Our Social Events </h1>
//                     <p className="text-gray-400 "> Start Your Social Event today and join a community of writers and readers who are passionate about sharing  their stories and idea .. We offer Everthing you need tp gate started From Helpful tips and tutorials </p>
//                 </div>
//                 <div className="absolute  h-full w-full  opacity-30  bg-[url('https://i.ibb.co/zV8SYgR/banner.jpg')] bg-cover bg-no-repeat  bg-center ">

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;