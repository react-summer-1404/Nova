import React from "react";
import { useField } from "formik";
import { Input } from "@heroui/input";

const FormField = ({ label, type, name }) => {
  const [field, meta] = useField({name:name})
  return (
      <Input {...field} label={label} type={type} />
  );
};

export default FormField
