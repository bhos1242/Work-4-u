import React from "react";

const StepMenu = ({ currentStep, onStepClick }) => {
  const steps = [
    "Task title",
    "Task description",
    "Task date",
    "Location",
    "Budget",
    "Submit task",
  ];

  return (
    <div className="flex flex-col items-start mr-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`mb-4 cursor-pointer ${
            currentStep === index + 1
              ? "font-bold text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => onStepClick(index + 1)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default StepMenu;
