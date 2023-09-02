import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import Homescreen from "../pages/Screen/Homescreen"

export const mainRoute= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index:true,
                element: <Homescreen/>
            }
        ]
    }
])