

const Contact = () => {
    return (
        <div>
            <div className=" lg:w-[50%]  mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-4 lg:mt-12  ">
                <h2 className="text-3xl text-center text-pink-600 font-bold mb-6 "> Contact Us </h2>
                <form action="">

                    <div className="mb-4 ">
                        <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> Your Name </label>
                        <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "  type="text" placeholder="Your Name " required />
                    </div>


                    <div className="mb-4 " > 
                        <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">Your Email </label>
                        <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="email" placeholder="Your Email " required  />
                    </div>


                    <div className="mb-4 ">
                        <label  className="block text-white  text-md font-semibold mb-2 " htmlFor=""> Your Messege  </label>
                        <textarea rows= '4'  className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text"  placeholder="Type Your Message Here..." required/>
                    </div>
                    <div className=" text-center ">
                        <button type="submit" className=" bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-pink-600 focus:outline-white " > Submit </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Contact;