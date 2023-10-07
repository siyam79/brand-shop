
import { Link, useNavigate } from "react-router-dom";
// import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Pages/useAuth/useAuth";
import SocialLogin from "../../Pages/SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser, handleUpdateProfile } = useAuth()

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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. <br></br> Quaerat fugiat ut assumenda  excepturi exercitationem quasi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
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
