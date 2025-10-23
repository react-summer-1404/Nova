import React from "react";
import { Field } from "formik";

const FormField = ({ placeHolder, type, name, id }) => {
  return (
    <Field
      type={type}
      name={name}
      id={id}
      placeholder={placeHolder}
      style={{
        background: "var(--color-light-gray)",
        color: "var(--color-black)",
      }}
      className={
        "text-right rounded-[50px] px-3 sm:px-8 py-3 sm:py-4 shadow-[inset_0_1px_2px_rgba(0,0,0,.2)] relative dark:placeholder:text-white"
      }
    />
  );
};

export default FormField;
