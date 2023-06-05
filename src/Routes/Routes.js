import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Tasks from "../Pages/Tasks/Tasks";
import AddTask from "../Pages/AddTask/AddTask";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Tasks />
            },
            {
                path: "/tasks",
                element: <Tasks />
            },
            {
                path: "/addtask",
                element: <AddTask />
            }
        ]
    }
])