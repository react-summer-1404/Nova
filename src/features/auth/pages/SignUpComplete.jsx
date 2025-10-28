import React from 'react'
import { FormText } from "../componenets/authForm/Authform";
import SignUpCompleteForm from '../Form/SignUpCompleteForm';

const SignUpComplete = () => {
  return (
    <div className="p-6 sm:py-14 sm:px-18 flex flex-col justify-end">
      <div className=" text-right ">
        <FormText
          subtitle={"ایمیل و پسورد خود را وارد کنید"}
        />
        <SignUpCompleteForm />
      </div>
    </div>
  )
}

export default SignUpComplete
