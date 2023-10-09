import { useState } from "react";
// import  member from "../../assets/slider/member1.png"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Users = () => {

    const [isOpen , setIsOpen] = useState(false)


    const userList = [
        {
            name:'jhon' , email :'jhon12@gmail.com',
        },
        {
            name:'Maicel' , email :'maicel12@gmail.com',
        },
        {
            name:'Athif' , email :'athifaslam@gmail.com',
        },
        {
            name:'Arjhit' , email :'arjhit1@gmail.com',
        },
        {
            name:'Imran' , email :'imran12@gmail.com',
        }
    ]

    return (
        <div className=" relative flex flex-col items-center w-[340px] h-[340px] rounded-lg ">
            <button onClick={() => setIsOpen((prev)=>!prev)} className="bg-blue-600 p-4 w-full flex items-center justify-between rounded-lg  text-white font-bold text-xl  tracking-wider border-spacing-2 border-transparent active:border-white duration-300 active:text-white text-start "> User List
            {
                !isOpen?(
                    <AiFillEyeInvisible className=""></AiFillEyeInvisible>
                    
                ):
                <AiFillEye className=" "></AiFillEye>

            } 
            </button>
            {
                isOpen && (
                    <div className=" bg-blue-400 absolute top-16 flex flex-col items-center rounded-lg p-2 w-full ">

                        {
                            userList?.map((user, i) =>(
                                <div className=" flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4  " key={i}>
                                    <h1 className="p-4 "> {user.name} </h1>
                                    <h1 className="p-4 "> {user.email} </h1>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    );
};

export default Users;