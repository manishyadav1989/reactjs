import React, {lazy, Suspense, useState, useEffect} from "react"
import ReactDom from "react-dom/client";
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contactus from "./src/components/Contactus";
import Restaurant from "./src/components/Restaurant";
import PageError from "./src/components/PageError";
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from "./src/utils/userContext";

const Grocery = lazy(() => import('./src/components/Grocery'));

const AppLayout = () => {
    const [usreName, setUserName] = useState();
    useEffect(()=>{
        const data = {
            name: "Manish Kumar"
        };
        setUserName(data.name);
    },[])
    return (
        <div className="app">
            <UserContext.Provider value={{loggedInUser: usreName, setUserName}}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </div>
    )
}
const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <PageError />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contactus",
                element: <Contactus />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loadding.........</h1>}><Grocery /></Suspense>
            },
            {
                path: "/list/:id",
                element: <Restaurant />
            }
        ]
    }
]);

const root = ReactDom.createRoot(document.getElementById('app'));
//root.render(<AppLayout/>);
root.render(<RouterProvider router={routerConfig} />);