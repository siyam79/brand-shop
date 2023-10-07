
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Pages/useAuth/useAuth";
import SocialLogin from "../../Pages/SocialLogin/SocialLogin";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassWord] = useState(false)
    const { signin } = useAuth();
    const location =useLocation();
    console.log( 'location  login page ',location);

    const loginHandleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        if (!/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}/.test(password)) {
            toast.error('please Your passwor capital letter special character and 6 characters ');
            return;
        }

        signin(email, password)
            .then(res => {
                if (res.user) {
                    toast.success('User logged in successfully', {
                        position: 'top-center'
                    })
                    navigate( location?.state ? location.state : '/')
                }

            }).catch(error => {
                toast.error('Currect Your Email' , error);
            })

    }


    return (
        <>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={loginHandleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className=" form-control relative ">
                                    <input type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered"
                                        name='password' required />
                                    <span className="absolute left-72 top-4 " onClick={() => setShowPassWord(!showPassword)}>

                                        {
                                            showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                        }
                                    </span>
                                </div>
                                <label className="label ">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover text-[14px] ">Create an account</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default Login;


