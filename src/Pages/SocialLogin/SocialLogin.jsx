

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext)

    const {navigate} = useNavigate()


    const handleSocialLogin = (user) => {

        user().then(res => {
            if(res.user){
                toast.success('User logged in successfully', {
                    position: 'top-center'
    
                })
                navigate('/')
            }
            
        }).catch(error => {
           toast.error(error.message);
        })


    }
  
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
                <button
                    onClick={() => { handleSocialLogin(githubLogin) }}
                    className="btn btn-neutral btn-sm">Github</button>

            </div>
        </>
    );
};

export default SocialLogin;
