import { useNavigate } from "react-router-dom";
import { sendVerifyMessage } from "../../../servises/api/auth/register/sendVerifyMessage/index";
import { usePostData } from "./usePostData";

export const usesendVerifyMessage = () => {
  const navigate = useNavigate();
  return usePostData(sendVerifyMessage, {
    onSuccess: (_, variables) => {
      navigate("/auth/verifycode", { state: { gmail: variables.gmail } });
    },
  });
};
