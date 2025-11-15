import {
  UserDashboard,
  Favorites,
  MyComments,
  MyCourses,
  ReservedCourses,
  SecuritySetting,
  UserInformation,
  EditUserInformation,
  CurrentUserInformation,
} from "../components/section/dashboard/index";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRouter from "../components/section/dashboard/PrivateRouter/PrivateRouter";

export const DashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      { index: true, element: <Navigate to="userdashboard" /> },
      { path: "userdashboard", element: <UserDashboard /> },
      { path: "favorite", element: <Favorites /> },
      { path: "mycomment", element: <MyComments /> },
      { path: "mycourses", element: <MyCourses /> },
      { path: "reservedcourses", element: <ReservedCourses /> },
      { path: "securitysetting", element: <SecuritySetting /> },
      {
        path: "userinformation",
        element: <UserInformation />,
        children: [
          { index: true, element: <Navigate to="usercurrentprofile" /> },
          { path: "usercurrentprofile", element: <CurrentUserInformation /> },
          { path: "edituserprofile", element: <EditUserInformation /> },
        ],
      },
    ],
  },
];
