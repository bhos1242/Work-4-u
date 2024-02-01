import React from "react";

// ... (your existing code)

const StepFive = ({ onNext, onPrevious, updateDetails }) => {
  const handleNext = () => {
    // Validate step five details here if needed
    // For example, check if budget is not empty
    const budget = document.getElementById("budget").value;
    if (!budget) {
      alert("Budget is required!");
      return;
    }

    updateDetails({ budget });
    onNext();
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          What&apos;s your budget for this task? (Minimum: 200)
        </label>
        <input
          id="budget"
          type="number"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your budget (Minimum: 200)"
          min="200"
        />
      </div>
      <div className="flex justify-between">
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepFive;
