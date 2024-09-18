export interface StepperProps {
    steps: number;
    currentStep?: number;
    onChange?: (step: number) => void;
  }