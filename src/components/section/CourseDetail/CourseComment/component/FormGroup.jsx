import React from "react";
import { Field, ErrorMessage } from "formik";
const FormGroup = ({
  name,
  label,
  children,
  as = "input",
  type = "text",
  inputClass = "",
  labelClass = "",
  errorClass = "",
}) => {
  return (
    <>
      <label
        htmlFor={name}
        style={{ color: "var(--color-text-gray2)" }}
        className={`font-[400] text-[10px]   md:text-[14px] text-right  ${labelClass}`}
      >
        {label}
      </label>
      <Field
        as={as}
        type={type}
        name={name}
        id={name}
        style={{ direction: "rtl", backgroundColor: "var(--color-white)" }}
        className={`border indent-5 focus:outline-none border-[#E1E4E7] mt-[-7px] w-[100%] rounded-[5px] ${inputClass}`}
      >
        {children}
      </Field>
      <ErrorMessage
        name={name}
        component={"span"}
        className={`text-[#df0f0f] ${errorClass}`}
      />
    </>
  );
};

export default FormGroup;
