import React, { useState } from "react";
import { Input } from "@heroui/react";
import { useField } from "formik";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const PasswordField = ({ label, name, placeholder }) => {
  const [isVisible, setIsVisible] =useState(false);
  const [field, meta] = useField({ name: name });

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...field}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-solid outline-transparent "
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label={label}
      placeholder={placeholder}
      type={isVisible ? "text" : "password"}
      variant="bordered"
      color="default"
      className="font-extrabold text-2xl"
    />
  );
};

export default PasswordField;

