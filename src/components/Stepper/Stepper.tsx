import React, { useState } from "react";
import { Circle } from "@/components/Circle/Circle";
import "@/styles.scss";
import Icon from "../Icon/Icons";
import { StepperProps } from "./IStepper";

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = 0,
  onChange,
}) => {
  const [activeStep, setActiveStep] = useState(currentStep);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    if (onChange) {
      onChange(step);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      handleStepChange(activeStep - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < steps - 1) {
      handleStepChange(activeStep + 1);
    }
  };

  return (
    <div className="tvr-comp-stepper">
      <button onClick={handlePrevious} disabled={activeStep === 0} data-testid="previous-button">
        <Icon $name="leftArrow" $w="8px" />
      </button>
      {[...Array(steps)].map((_, index) => (
        <Circle
          key={index}
          isActive={index === activeStep}
          onClick={() => handleStepChange(index)}
          size={18}
          data-testid="status-circle"
        />
      ))}
      <button onClick={handleNext} disabled={activeStep === steps - 1} data-testid="next-button">
        <Icon $name="rightArrow" $w="8px" />
      </button>
    </div>
  );
};

export { Stepper };
