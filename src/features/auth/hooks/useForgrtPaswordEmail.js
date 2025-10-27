import { forgetPasswordEmail } from "../../../servises/api/auth/resetpassword/forgetpassword/index";
import { usePostData } from "./usePostData";

const useforgetPasswordEmail = () => {
  return usePostData(forgetPasswordEmail, {
    
  })
};

export default useforgetPasswordEmail;
