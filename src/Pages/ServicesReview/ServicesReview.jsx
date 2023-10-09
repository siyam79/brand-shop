import { BiUserPlus } from "react-icons/bi";
const ServicesReview = () => {

    const service = [
        {
            logo: 'user', level: 'Anniversary ', count: 86
        },
        {
            logo: 'FaAccessibleIcon', level: 'Wedding Bliss ', count: 65
        },
        {
            logo: 'FaGoGiEngagementRingogle', level: 'Engagement', count: 77
        },
        {
            logo: 'FaBirthdayCake', level: 'Birthday ', count: 90
        },
        {
            logo: 'FaBabyCarriage', level: 'Baby Shower', count: 60
        },
        // {
        //     logo : 'FaGoogle',level : 'Retirement ', count: 74
        // },
    ]



    return (
        <div >
            <div className="min-h-screen lg:mt-6 mt-1">
                <section id="service" className="py-10 bg-gray-700 relative ">
                    <div className="mt-8 text-gray-100 text-center">
                        <h3 className="text-3xl font-semibold"> User expression <span className="text-cyan-600"> AND </span></h3>
                        <p className="text-gray-200 mt-3 text-2xl "> User Reviwe  </p>
                        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap " data-aos="zoom-out-down">
                            {
                                service?.map((service, i) => (
                                    <div key={i} className="  border-2 group  border-cyan-600 relative min-w-[12rem] max-w-[16rem]  bg-gray-900 p-10 rounded-lg  ">
                                        <div style={{
                                            background: `conic-gradient(rgb(8,145,170) ${service.count}% , #ddd ${service.count}%  )`,
                                        }} className="w-32 h-32 flex items-center justify-center rounded-full text-center  ">
                                            <div className=" text-5xl w-28 h-28 bg-slate-900 rounded-full flex items-center justify-center group-hover:text-cyan-600 "  data-aos="fade-up-left">
                                                <BiUserPlus></BiUserPlus>
                                            </div>
                                        </div>
                                        <h1 className='text-xl '> {service.level} </h1>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default ServicesReview;