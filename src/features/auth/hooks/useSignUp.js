import { useMutation } from "@tanstack/react-query";
import { sendVerifyMessage } from "../../../servises/api/auth/register/sendVerifyMessage/index";

const sendVerifyMessage = () => {
  return useMutation({
    mutationFn: (phoneNumber) => sendVerifyMessage(phoneNumber),
  });
};
