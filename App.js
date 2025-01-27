import React, {lazy, Suspense, useState, useEffect} from "react"
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contactus from "./src/components/Contactus";
import Restaurant from "./src/components/Restaurant";
import PageError from "./src/components/PageError";
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from "./src/utils/userContext";
import store from "./src/redux/store";
import Cart from "./src/components/Cart";

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
            <Provider store={store}>
                <UserContext.Provider value={{loggedInUser: usreName, setUserName}}>
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);

const root = ReactDom.createRoot(document.getElementById('app'));
//root.render(<AppLayout/>);
root.render(<RouterProvider router={routerConfig} />);