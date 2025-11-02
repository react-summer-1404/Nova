import React, { useState } from "react";
import { signUpStepperConfigs } from "../../config/stepperConfig";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const Stepper = ({ buttonText,navigatePage }) => {
  const [currentStep, setcurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate()

  const signUpStep = signUpStepperConfigs;

  const handleNext = () => {}

  return (
    <>
      <Button className="yellow-button" onPress ={handleNext}>{buttonText}
      </Button>
      <div className="stepper">
        {signUpStep.map((step, index) => {
          return (
            <div className={`step ${currentStep>index+length || isComplete ? "complete" : "" } ${
              currentStep === index + 1 ? "active" : ""}`}>
              <div className="step-number">{index + 1}</div>
              <div className="step-name"> {step.name} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stepper;
