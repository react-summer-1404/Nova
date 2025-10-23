import { useMutation } from "@tanstack/react-query";
import { forgetPasswordEmail } from "../../../servises/api/auth/resetpassword/forgetpassword/index";

const useforgetPasswordEmail = () => {
  return useMutation({
    mutationFn: (email) => forgetPasswordEmail(email),
  });
};

export default useforgetPasswordEmail;
