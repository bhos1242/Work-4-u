"use client";
import React, { useState } from "react";
import StepMenu from "./components/StepMenu";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import FinalStep from "./components/FinalStep";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { addTask } from "@/services/taskService";

const steps = [
  "Task Details",
  "Description",
  "Date",
  "Location",
  "Budget",
  "Confirmation",
];

const TaskCreationForm = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  const status = "OPEN";
  const [currentStep, setCurrentStep] = useState(1);
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    selectedDate: null,
    location: "",
    budget: "",
  });

  const updateDetails = (details) => {
    setTaskDetails((prevDetails) => ({ ...prevDetails, ...details }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };
  const handleTaskConfirmed = async () => {
    try {
      const taskWithUserEmail = { ...taskDetails, userEmail, userName, status };
      const result = await addTask(taskWithUserEmail);
      toast.success(result.message);
      // Handle task confirmation success, e.g., redirect to a confirmation page
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to add task");
    }
  };

  return (
    <div className="flex flex-col max-w-4xl p-8 mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg lg:flex-row lg:p-16">
      {/* Hidden for small screens */}
      <div className="hidden pr-8 lg:block">
        <StepMenu currentStep={currentStep} onStepClick={goToStep} />
      </div>
      <div className="flex-1 lg:ml-8">
        <div className="mb-4 text-lg font-semibold text-gray-800">
          Step {currentStep}: {steps[currentStep - 1]}
        </div>
        {currentStep === 1 && (
          <StepOne onNext={handleNext} updateDetails={updateDetails} />
        )}
        {currentStep === 2 && (
          <StepTwo
            onNext={handleNext}
            onPrevious={handlePrevious}
            updateDetails={updateDetails}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            onNext={handleNext}
            onPrevious={handlePrevious}
            updateDetails={updateDetails}
          />
        )}
        {currentStep === 4 && (
          <StepFour
            onNext={handleNext}
            onPrevious={handlePrevious}
            updateDetails={updateDetails}
          />
        )}
        {currentStep === 5 && (
          <StepFive
            onNext={handleNext}
            onPrevious={handlePrevious}
            updateDetails={updateDetails}
          />
        )}
        {currentStep === 6 && (
          <FinalStep
            taskDetails={taskDetails}
            onTaskConfirmed={handleTaskConfirmed}
            onPrevious={handlePrevious} // Add a function to go to the previous step
          />
        )}
      </div>
    </div>
  );
};

export default TaskCreationForm;
