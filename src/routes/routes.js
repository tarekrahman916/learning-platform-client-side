import { createBrowserRouter } from "react-router-dom";
import CoursesLayout from "../layout/CoursesLayout/CoursesLayout";
import Main from "../layout/Main/Main";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/courses",
        element: <CoursesLayout></CoursesLayout>,
        children: [
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () => fetch("http://localhost:5000/courses"),
          },
        ],
      },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
