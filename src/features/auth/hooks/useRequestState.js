import { useEffect } from "react";
import toast from "react-hot-toast";

export const useRequestState = ({isError,isSuccess, isPending, errorMessage, successMessage, defaultText}) => {
    useEffect(() =>{
        if(isError) {
            toast.error(errorMessage || "مشکلی به وجود آمده")
        }
        else if(isSuccess) {
            toast.success(successMessage || "درخواست با موفقیت انجام شد")
        }

    },[isError,isSuccess])

    let buttonText = defaultText;
    if (isPending) buttonText = "کمی صبر کنید..."
    if(isSuccess) buttonText = "ارسال شد"
    if(isError) buttonText = "دوباره تلاش کنید"

    return buttonText
}
