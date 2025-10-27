import toast from "react-hot-toast";
import { verifyCode } from "../../../servises/api/auth/resetpassword/resetConfrimValue";
import { usePostData } from "./usePostData";
import { useNavigate } from "react-router-dom";


export const useVerifyCode = () => {
    const navigate = useNavigate()
    return usePostData(verifyCode, {
        onSuccess: (data, variables) => {
            navigate("/auth/signupcomplete")
        }
    })
}
