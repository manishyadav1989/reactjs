import React, {lazy, Suspense} from "react"
import ReactDom from "react-dom/client";
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contactus from "./src/components/Contactus";
import Restaurant from "./src/components/Restaurant";
import PageError from "./src/components/PageError";
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Grocery = lazy(() => import('./src/components/Grocery'));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
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