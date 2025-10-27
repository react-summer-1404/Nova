import { useMutation } from "@tanstack/react-query";
import { login } from "../../../servises/api/auth/login";
import { usePostData } from "./usePostData";

const usePostLogin = () => {
    return usePostData(login, {
        onSuccess: () => {
        navigate("/dashboard")
    },
    })
}


export default usePostLogin;