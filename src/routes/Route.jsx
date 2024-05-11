import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import TermOfServices from "./TermOfServices";
import Support from "./Support";






const router = createBrowserRouter([

{
 path: '/',
 element: <Home/>   
},
{
    path: '/about',
    element: <About/>
},
{  path: '/contact',
element: <Contact/>
    
},
{
    path: '/termOfServices',
    element: <TermOfServices/>

},
{
    path: '/support',
    element: <Support/>
}

])



export default router