import { login } from "../../../servises/api/auth/login";
import { usePostData } from "./usePostData";
import { useNavigate } from "react-router-dom";

const usePostLogin = () => {
  const navigate = useNavigate();
  return usePostData(login, {
    // onSuccess: () => {
    //   navigate("/dashboard");
    // },
  });
};

export default usePostLogin;
