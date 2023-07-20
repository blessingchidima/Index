import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Block/Layout";
import Homescreen from "../Component/pages/HomeScreen";

import Contact from "../Component/pages/Contact";

import Heropage from "../Component/pages/Heropage";

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,

        children:[
            {
                path:"/",
                element:<Homescreen/>,
            },
            {
                path:"/",
                element:<Heropage/>,
            },
            {
                path:"/",
                element:<Contact/>,
            }
        ]
    }
])
