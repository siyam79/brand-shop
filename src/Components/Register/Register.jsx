
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import useAuth from "../../Pages/useAuth/useAuth";
import SocialLogin from "../../Pages/SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Register = () => {
    const { createUser, handleUpdateProfile } = useAuth()
    const [showPassword , setShowPassWord] = useState(false)

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const img = e.target.img.value

        console.log(name, email, password);


        // password  validation 

        if (!/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}/.test(password)) {
            toast.error('please Your passwor capital letter special character and 6 characters ');
           return;

        }


        createUser(email, password)
            .then(res => {
                    handleUpdateProfile(name, img)
                        .then(() => {
                            toast.success('User created successfully', {
                                position: 'top-center'

                            })
                            navigate('/')
                        })

            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold ">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg ">Your Email</span>
                                </label>
                                <input type="text" placeholder="Your E-mail" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <div className=" form-control relative ">
                                <input type= { showPassword ? "text" : "password"}
                                 placeholder="password"
                                  className="input input-bordered"
                                   name='password' required />
                                <span className="absolute left-72 top-4 " onClick={()=> setShowPassWord(!showPassword)}>
                                    
                                    {
                                        showPassword? <AiFillEye></AiFillEye> :<AiFillEyeInvisible></AiFillEyeInvisible> 
                                    } 
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>
                            <label className="label">
                               You Have an account? <Link to="/login" className="label-text-alt link link-hover text-[18px] ">Please Login</Link>
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

export default Register;
