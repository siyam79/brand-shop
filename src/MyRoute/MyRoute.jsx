import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Userlist from "../Components/Userlist/Userlist";


const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/events/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/events.json')

            },
            {
                path: '/userlist',
                element: <PrivateRoute><Userlist></Userlist></PrivateRoute>,

            },
            // {
            //     path: '/about',
            //     element: <About></About>
            // },
            {
                path: '/contact',
                element:<PrivateRoute> <Contact></Contact></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default MyRoute;