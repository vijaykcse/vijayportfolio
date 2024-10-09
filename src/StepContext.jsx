// src/StepContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";

// Create a context for managing steps
const StepContext = createContext();

// Custom hook to use the StepContext
export const useStep = () => {
  return useContext(StepContext);
};

// StepProvider component to manage step state
// eslint-disable-next-line react/prop-types
export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState("home");

  // Function to change steps
  const nextStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <StepContext.Provider value={{ currentStep, nextStep }}>
      {children}
    </StepContext.Provider>
  );
};
