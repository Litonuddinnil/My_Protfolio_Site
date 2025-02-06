import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home"; 
import ProjectDetails from "../Pages/Micro_tasks/ProjectDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/project/:id", 
          element:<ProjectDetails></ProjectDetails>
        }
      ]
    },
  ]);
 
export default router;