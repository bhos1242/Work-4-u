"use client";
import React, { useState } from "react";

const StepTwo = ({ onNext, onPrevious, updateDetails }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    setIsLoading(true);

    // Validate step two details here if needed
    // For example, check if description is not empty
    const description = document.getElementById("description").value;
    if (!description) {
      alert("Description is required!");
      setIsLoading(false);
      return;
    }

    updateDetails({ description });

    // Load the next step
    onNext();

    setIsLoading(false);
  };

  const handlePrevious = () => {
    setIsLoading(true);

    // Load the previous step
    onPrevious();

    setIsLoading(false);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Task Description
        </label>
        <textarea
          id="description"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Describe your task in detail..."
        />
      </div>
      <div className="flex justify-between">
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={handlePrevious}
          disabled={isLoading}
        >
          Previous
          {isLoading && <div className="ml-2 spinner"></div>}
        </button>
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={handleNext}
          disabled={isLoading}
        >
          Next
          {isLoading && <div className="ml-2 spinner"></div>}
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
