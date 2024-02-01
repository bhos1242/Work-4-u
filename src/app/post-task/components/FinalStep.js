import React, { useState } from "react";
import toast from "react-hot-toast";
import { addTask } from "@/services/taskService";

const FinalStep = ({ taskDetails, onTaskConfirmed }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmTask = async () => {
    setIsLoading(true);
    try {
      // Perform the API call to add the task to the database

      onTaskConfirmed(); // Call the callback function to handle the confirmation
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to add task");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
        Review Your Task
      </h2>
      <div className="mb-4">
        <strong>Title:</strong> {taskDetails.title}
      </div>
      <div className="mb-4">
        <strong>Description:</strong> {taskDetails.description}
      </div>
      <div className="mb-4">
        <strong>Date:</strong> {taskDetails.selectedDate}
      </div>
      <div className="mb-4">
        <strong>Location:</strong> {taskDetails.location}
      </div>
      <div className="mb-4">
        <strong>Budget:</strong> {taskDetails.budget}
      </div>
      {/* Include other task details here */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={handleConfirmTask}
          disabled={isLoading}
        >
          {isLoading ? "Confirming..." : "Confirm Task"}
        </button>
      </div>
    </div>
  );
};

export default FinalStep;
