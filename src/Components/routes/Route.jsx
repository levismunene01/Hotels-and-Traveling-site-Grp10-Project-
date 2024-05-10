import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import HotelDetails from "./HotelDetails";


const router = createBrowserRouter([

{
 path: '/',
 element: <Home/>   
},
{
    path: '/about',
    element: <About/>
},
{
    path: '/Hotels/:id',
    element: <HotelDetails/>
}

])



export default router
