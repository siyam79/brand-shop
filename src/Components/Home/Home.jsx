
import Events from "../../Pages/Events/Events";
import Marquap from "../../Pages/Marquap/Marquap";
import ServicesReview from "../../Pages/ServicesReview/ServicesReview";
import Banner from "../../Pages/Sliders/Sliders";
import { useLoaderData } from "react-router-dom";
import About from "../About/About";

const Home = () => {

    const events = useLoaderData()
    console.log(events);


    return (
        <div>
            
            <Banner></Banner>
            <Marquap></Marquap>
            <div>
                <h1 className=" text-center mt-10 font-bold text-2xl text-slate-500 hover:text-blue-600  "> Our Social Service  </h1>
            </div>
            <div className= " w-[98%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-4 ">
                {
                    events?.map(event => <Events key={event.id} event={event} ></Events>)
                }
            </div>
           <ServicesReview></ServicesReview>
           <About></About>

        </div>
    );
};

export default Home;