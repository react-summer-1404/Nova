import React from "react";

const Stepper = () => {
  return (
    <ul style={{ direction: "rtl" }} class="steps mt-18">
      <li class="step step-accent">ایمیل</li>
      <li class="step step-primary">Choose plan</li>
      <li class="step">Purchase</li>
      <li class="step">Receive Product</li>
    </ul>
  );
};

export default Stepper;
