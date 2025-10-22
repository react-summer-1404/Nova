import React from 'react'
import Header from "../componenets/authLayout/Header";
import { FormText } from "../componenets/authForm/Authform";
import VarifyCodeForm from "../Form/VarifyCodeForm";

const VarifyCodePage = () => {
  return (
     <div className="p-6 sm:py-14 sm:px-18 flex flex-col justify-end">
      <div className=" text-right ">
        <FormText
          title={"دریافت کد"}
          subtitle={"کدی که برای شما ارسال شد را اینجا وارد کنید"}
        />
        <VarifyCodeForm />
      </div>
    </div>
  )
}

export default VarifyCodePage
