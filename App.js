import React from "react"
import ReactDom from "react-dom/client";
import Header from './src/components/Header';
import Body from './src/components/Body';
import "./style.css";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<AppLayout/>);