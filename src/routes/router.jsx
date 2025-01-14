import App from "../App";
import { createBrowserRouter, Route } from 'react-router-dom';
import Home from "../Pages/home/Home";
import Start from "../Pages/start-playing/ChatSection";
import PlayersSection from "../Pages/home/StartSection";
import Signup from "../Pages/auth/Signup";
import Login from "../Pages/auth/Login";
import ChatSection from "../Pages/start-playing/ChatSection";
import Features from "../Pages/Features";
import Community from "../Pages/Community";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            // { path: "/", element: <PlayersSection /> },
            { path: "/features", element: <Features /> },
            {
                path: "/community",
                element: <Community />
            },
        ]
    },

    {
        path: "/register",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/chatSection",
        element: <ChatSection />
    },

])

export default router
