import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import TasksList from "../pages/TasksList";
import AddATask from "../pages/AddATask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <TasksList></TasksList>,
      },
      {
        path: "/addATask",
        element: <AddATask></AddATask>,
      },
    ],
  },
]);

export default router;
