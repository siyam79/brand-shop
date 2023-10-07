import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import ErrorElement from "../Components/ErrorElement/ErrorElement";


const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/services/:id',
                element: <Services></Services>,
            
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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