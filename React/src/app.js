import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BodyComponent } from "./components/body/Body";
import { HeaderComponent } from "./components/Header/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import { About } from "./components/about/about";
import { Error } from "./components/error/error";
import { Contact } from "./components/contact/contact";
import { Details } from "./components/details/details";

const h1 = React.createElement(
  "h2",
  {
    title: "Hey",
  },
  "Hey This is React Elements"
);

const LayoutComponent = ()=>{
  return (<>
      <HeaderComponent />
      <Outlet/>
      {/* <BodyComponent /> */}
  </>)
}

const About = lazy(()=> import("./components/about/about.js"));
console.log(About)

const routers = createBrowserRouter([
  {
    path:'/',
    element: <LayoutComponent />,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <BodyComponent />,
        errorElement:<Error/>
      },
      {
        path:'contact',
        element: <Contact />
      },
      {
        path:'/about',
        element:(
          <Suspense fallback={<div>Page is Loading...</div>}>
            <About />
          </Suspense>
        )
        
      },
      {
        path:'details/:id',
        element: <Details />
      }
    ]
  },

])
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={routers}/>);
//Functional and Class Component.

// Functional component
