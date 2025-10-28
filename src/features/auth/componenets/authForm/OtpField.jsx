import React from "react";
import { useField } from "formik";
import {InputOtp} from "@heroui/input-otp";

const OtpField = ({ name }) => {
  const [field, meta] = useField({name:name})
  return (
      <InputOtp {...field} length={6} />
  );
};

export default OtpField
