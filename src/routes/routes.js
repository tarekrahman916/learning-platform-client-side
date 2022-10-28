import { createBrowserRouter } from "react-router-dom";
import CoursesLayout from "../layout/CoursesLayout/CoursesLayout";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import CoursesDetails from "../pages/CoursesDetails/CoursesDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faqs from "../pages/Faqs/Faqs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-ecru.vercel.app/courses"
          ),
      },
      {
        path: "/courses",
        element: <CoursesLayout></CoursesLayout>,
        children: [
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () =>
              fetch(
                "https://b610-lerning-platform-server-side-ecru.vercel.app/courses"
              ),
          },
        ],
      },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/faqs", element: <Faqs></Faqs> },
      {
        path: "/course/:id",
        element: <CoursesDetails></CoursesDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-ecru.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-ecru.vercel.app/course/${params.id}`
          ),
      },
    ],
  },
]);
