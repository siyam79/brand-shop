
import { Link } from "react-router-dom";
import photo from "../../assets/slider/siyam-removebg-preview.png"
const About = () => {

    return (
        <div>
            <section id="about" className=" px-3  text-white  "  data-aos="zoom-in">
                <div className="text-center  ">
                    <h2 className="text-4xl font-bold text-gray-800 mt-2"> Hire <span className=" text-cyan-700">Me</span> </h2>

                    <p className=" text-gray-600 mt-3 text-lg "> Do you have any work </p>
                </div>
                <div className="bg-gray-700 relative  px-8 rounded-2xl py-5 lg:max-w-5xl mx-auto min-h-[24rem] mt-6 mb-4  flex gap-6 lg:flex-row flex-col-reverse items-center  ">
                    <div>
                        <h1 className=" text-2xl font-semibold "> Do you any work from me ?  </h1>
                        <p className=" lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-100 leading-6 ">A social event manager is a professional responsible for planning, organizing, and executing various social gatherings and events, such as weddings, birthday parties, anniversary celebrations, and corporate parties. Their role involves coordinating all aspects of the event to ensure it runs smoothly and meets the clients or host s expectations. Key responsibilities of a social event manager include: </p>
                       <Link to= "/contact" > <button className=" btn-primary mt-6 py-2 px-6 rounded-lg "> Invite Now </button></Link>
                    </div>
                    <div>
                        <img src={photo} alt="" className="lg:h-[32rem] h-84 lg:absolute bottom-0 -right-0 object-cover " />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;