import MainLayout from "../layouts/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Ethics from "@/pages/Ethics";
import ImportantLinks from "@/pages/ImportantLinks";
import Services from "@/pages/Services";
import Future from "@/pages/Future";
import Projects from "@/pages/Projects";
import HeritagePage from "@/pages/HeritagePage";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }, {
                path: '/Services',
                element: <Services />
            }, {
                path: '/future-partrens',
                element: <Future />
            }, {
                path: '/ethics-and-believes',
                element: <Ethics />
            }, {
                path: '/heritage',
                element: <HeritagePage />
            }, {
                path: '/important-links',
                element: <ImportantLinks />
            },
            {
                path: '/projects',
                element: <Projects />
            },
        ]
    }
]);
export default router;