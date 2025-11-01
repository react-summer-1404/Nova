import React from "react";
import { useField } from "formik";
import { Input } from "@heroui/input";

const FormField = ({ label, type, name, placeholder }) => {
  const [field, meta] = useField({name:name})
  return (
      <Input {...field} label={label} placeholder={placeholder} type={type} className="font-extrabold text-2xl"/>
  );
};

export default FormField
