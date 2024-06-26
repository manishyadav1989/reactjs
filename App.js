import React from "react"
import ReactDom from "react-dom/client";

// const heading = React.createElement(
//     "div",
//     {id:"parent", className:"parent"}, 
//     React.createElement(
//         "div",
//         {id:"child", className:"child"},
//         React.createElement(
//             "h1",
//             {id:"heading", className:"heading"}, 
//             "Welcome into the React Js world!"
//         )
//     )
// );
//console.log(heading);
const jsxHeading = <h1 id="heading">Welcome into the React Jsx world!</h1>;
console.log(jsxHeading);
const MainApp = ReactDom.createRoot(document.getElementById('app'));
MainApp.render(jsxHeading);