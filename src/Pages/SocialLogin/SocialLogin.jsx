

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const SocialLogin = () => {
    
    const { googleLogin, githubLogin } = useContext(AuthContext)

    const {navigate} = useNavigate()

    const handleSocialLogin = (user) => {

        user()
        .then(res => {
            console.log(res);
            if(res.user){
                toast.success('User logged in successfully', {
                    position: 'top-center'
    
                })
                navigate('/')
            }
            
        }).catch(error => {
           toast.error('please Try your Login' , error);
        })
    }
  
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-sm "><span className=" text-xl"><FcGoogle></FcGoogle></span> Login</button>
                <button
                    onClick={() => { handleSocialLogin(githubLogin) }}
                    className="btn btn-sm " ><span className="text-xl "> <BsGithub></BsGithub> </span> Github</button>

            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default SocialLogin;
