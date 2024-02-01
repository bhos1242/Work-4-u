import React, { useState } from "react";

const TaskTypeDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("In-person");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Task Type
      </label>
      <select
        className="block w-full py-2 pl-3 pr-10 text-base bg-white border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="In-person">In-person</option>
        <option value="Online">Online</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default TaskTypeDropdown;
