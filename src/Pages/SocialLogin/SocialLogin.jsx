

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext)

    const { navigate } = useNavigate()

    const handleSocialLogin = (user) => {
        // googleLogin()
        // .then(res =>{
        //    alert(res.user, 'login succesfull');
        //    user&&  navigate('/')

        // }).catch(error=>{
        //     console.error(error.message);
        // })

        user()
            .then(res => {
                console.log(res);
                
                if (res.user) {
                   
                    toast.success('User logged in successfully', {
                        position: 'top-center'

                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);
                   
                    // navigate(location?.state ? location.state : '/')
                }

            }).catch(error => {
                toast.error( error);
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
