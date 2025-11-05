import {UserDashboard,Favorites,MyComments,MyCourses,ReservedCourses,SecuritySetting,UserInformation,} from "../components/section/dashboard/index";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

export const DashboardRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Navigate to="userdashboard" /> },
      { path: "userdashboard", element: <UserDashboard /> },
      { path: "favorite", element: <Favorites /> },
      { path: "mycomment", element: <MyComments /> },
      { path: "mycourses", element: <MyCourses /> },
      { path: "reservedcourses", element: <ReservedCourses /> },
      { path: "securitysetting", element: <SecuritySetting /> },
      { path: "userinformation", element: <UserInformation /> },
    ],
  },
];
