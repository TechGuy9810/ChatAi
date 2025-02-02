import {StrictMode } from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import Home from './routes/Home.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Chat from './routes/Chat.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Signup from './routes/Signup';
import Login from './routes/Login';
import AboutPage from './routes/AboutPage';

const router = createBrowserRouter([
{
  element:<RootLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
    path:"/sign-up/*",
    element:<Signup/>
    },
    {
    path:"/sign-in/*",
    element:<Login/>
    },
    {
      element:<DashboardLayout/>, 
      children:[
       {
        path:"/dashboard",
        element:<Dashboard/>
       },
       {
        path:"/dashboard/chats/:id",
        element:<Chat/>
       } 
      ]
    },
    {
      path:"/about",
      element:<AboutPage/>
    }
  ]
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>
)
