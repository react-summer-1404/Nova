import { useNavigate } from "react-router-dom";
import { signUpCompleteRequest } from "../../../servises/api/auth/register/register";
import { usePostData } from "./usePostData";

export const useSignUpComplete = () => {
  const navigate = useNavigate()
  return usePostData(signUpCompleteRequest, {
    onSuccess: () => {
        navigate("/auth/login")
    },
  });
};
