import { Outlet } from "react-router-dom";
import CurrentCourseCard from "../UserDashboard/CurrentCourseCard";
import CurrentUserInformation from "./CurrentUserInformation";

const UserInformation = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserInformation;
