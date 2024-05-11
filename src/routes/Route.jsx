import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import TermOfServices from "./TermOfServices";
import Support from "./Support";
import Blog from "./Blog";
import PrivacyStatement from "./PrivacyStatement:";




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
    path: 'blog',
    element: <Blog/>
},
{  
    path: '/contact',
element: <Contact/>
    
},
{ path:'/privacy', 
element: <PrivacyStatement/>
},
{
    path: '/terms',
    element: <TermOfServices/>

},
{
    path: '/support',
    element: <Support/>
}

])



export default router