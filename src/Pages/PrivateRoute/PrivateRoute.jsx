import { Navigate } from "react-router-dom";
import useAuth from "../../Pages/useAuth/useAuth";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {


    const {user ,  loading} = useAuth()
    console.log(loading);
    if (loading) {
        return <div>
            <h1 className="text-5xl text-center font-semibold ">Loading</h1>
        </div>
        
    }
  
    if (!user.email) {
        return <Navigate to='/login'></Navigate>
        
    }
    return children

    
};
PrivateRoute.propTypes = {
    children: PropTypes
}

export default PrivateRoute;
