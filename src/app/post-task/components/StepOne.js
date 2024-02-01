import React from "react";

const StepOne = ({ onNext, updateDetails }) => {
  const handleNext = () => {
    // Validate step one details here if needed
    // For example, check if title is not empty
    const title = document.getElementById("title").value;
    if (!title) {
      alert("Title is required!");
      return;
    }

    updateDetails({ title });
    onNext();
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          What do you need done?
        </label>
        <input
          id="title"
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="E.g. Help move my sofa"
        />
      </div>
      <div className="flex justify-end">
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

export default StepOne;
