// import NavBar from "../../Pages/NavBar/NavBar";

import Events from "../../Pages/Events/Events";
import Marquap from "../../Pages/Marquap/Marquap";
import Banner from "../../Pages/Sliders/Sliders";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const events = useLoaderData()
    console.log(events);




    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Banner></Banner>
            <Marquap></Marquap>
            <div className= " w-[98%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-4 ">
                {
                    events?.map(event => <Events key={event.id} event={event} ></Events>)
                }
            </div>
        </div>
    );
};

export default Home;