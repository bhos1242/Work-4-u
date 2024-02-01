import React from "react";
import Profile from "../Profile";

const PaymentsHistory = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 md:flex-row">
      <div className="hidden w-full left-menu md:w-1/4 md:block">
        <Profile />
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg md:w-3/4">
        <div className="mb-6 heading">
          <h1 className="text-4xl font-bold text-gray-800">Payments History</h1>
        </div>

        <div className="mt-6 text-gray-800">
          <p className="text-xl font-semibold">Earned/Outgoing</p>
          <p className="text-base text-gray-600">Showing all transactions.</p>
        </div>

        <div className="pb-4 mt-6 border-b-2 border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">All</div>
            <div className="text-lg font-semibold text-blue-500">
              Net earned
            </div>
          </div>
          <div className="text-4xl font-semibold text-blue-500">Rs.0.00</div>
          <div className="mt-2 text-base text-gray-600">
            0 transactions for 1st Jan 2012 - 23rd Oct 2023
          </div>
        </div>

        <div className="mt-6 text-gray-800">
          <p className="mb-2 text-lg text-gray-600">
            You havent earned from any tasks yet. Still looking for the right
            task?
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Browse tasks
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentsHistory;
