import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Pages/useAuth/useAuth";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user ,  loading} = useAuth()

    const location = useLocation()
    console.log(location.pathname);

    if (loading) {

        return <div className="text-center mt-10 ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
        
    }
 return <Navigate state={location.pathname} to='/login'></Navigate>


    // console.log(loading);
    // console.log(user);
    // if (loading) {
    //     return <div>
    //         <h1 className="text-5xl text-center font-semibold ">Loading</h1>
    //     </div>
        
    // }
  
    // if (!user.email) {
    //     return <Navigate to='/login'></Navigate>
        
    // }
    // return children

    
};
PrivateRoute.propTypes = {
    children: PropTypes
}

export default PrivateRoute;
