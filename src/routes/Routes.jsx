import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CollegeCardDetails from "../pages/Colleges/CollegeCardDetails";
import CollegeList from "../pages/Colleges/CollegeList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import CollegeDetails from "../pages/Home/collegeDetails";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/view-details/:id",
          element: <CollegeDetails></CollegeDetails>,
          loader:()=> fetch('./college.json')
        },
        {
          path: "/college-details/:id",
          element: <CollegeCardDetails></CollegeCardDetails>,
          loader:()=> fetch('./college.json')
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "profile",
          element: <Profile></Profile>
        },
        {
          path: "college",
          element: <CollegeList></CollegeList>
        },
        {
          path: "register",
          element: <Register></Register>,
        },
      ],
    }
  ]);
  