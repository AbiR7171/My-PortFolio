import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import LoadingAnimation from './Components/Loading/LoadingAnimation.jsx';
import LeftSideNav from './Components/LeftSideNav.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingAnimation><MainLayout/></LoadingAnimation>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LeftSideNav>
    <RouterProvider router={router} />
    </LeftSideNav>
  </React.StrictMode>,
)
