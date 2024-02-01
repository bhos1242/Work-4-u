import React from "react";

const StepFour = ({ onNext, onPrevious, updateDetails }) => {
  const handleNext = () => {
    // Validate step four details here if needed
    // For example, check if location is not empty
    const location = document.getElementById("location").value;
    if (!location) {
      alert("Location is required!");
      return;
    }

    updateDetails({ location });
    onNext();
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Where do you need this done?
        </label>
        <input
          id="location"
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your location"
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

export default StepFour;
