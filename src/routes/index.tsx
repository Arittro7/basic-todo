import App from "@/App";
import Tasks from "@/Pages/Tasks";
import User from "@/Pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children:[
      {
        path: '/users',
        element: <User></User>
      },
      {
        path: '/tasks',
        Component: Tasks
      }
    ]
  }
])

export default router