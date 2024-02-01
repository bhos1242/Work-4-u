import React from "react";

const StepThree = ({ onNext, onPrevious, updateDetails }) => {
  const handleNext = () => {
    // Validate step three details here if needed
    // For example, check if selectedDate is not null
    const selectedDate = document.getElementById("selectedDate").value;
    if (!selectedDate) {
      alert("Date is required!");
      return;
    }

    updateDetails({ selectedDate });
    onNext();
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          When do you need this done?
        </label>
        <input
          id="selectedDate"
          type="date"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
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

export default StepThree;
