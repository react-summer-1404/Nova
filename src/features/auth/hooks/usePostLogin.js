import { useMutation } from "@tanstack/react-query";
import { login } from "../../../servises/api/auth/login";

const usePostLogin = () => {
    return useMutation({
        mutationFn : (loginFormData) => login(loginFormData)
    })
}


export default usePostLogin;